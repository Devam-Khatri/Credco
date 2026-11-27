import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { brotliCompressSync, constants, gzipSync } from "node:zlib";

const root = dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.CREDCO_PREVIEW_PORT ?? 4173);
const contentTypes = new Map(Object.entries({
  html: "text/html; charset=utf-8",
  css: "text/css; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  xml: "application/xml; charset=utf-8",
  txt: "text/plain; charset=utf-8",
  svg: "image/svg+xml",
  png: "image/png",
  webp: "image/webp",
  woff2: "font/woff2",
}));
const allowedFiles = /^(?:\/(?:index|404)\.html|\/(?:robots\.txt|sitemap\.xml|favicon\.svg)|\/(?:css|js|media|fonts)\/[a-zA-Z0-9._-]+|\/(?:about|services|projects|gallery|reviews|process|blog|contact|consultation|faq|privacy-policy|terms-and-conditions)(?:\/[a-z\d-]+)?(?:\.html)?)$/;
// Optional security headers: used only if a vercel.json exists (the live site is on GitHub Pages).
let securityHeaders = {};
try {
  const { headers } = JSON.parse(await readFile(resolve(root, "vercel.json"), "utf8"));
  securityHeaders = Object.fromEntries(headers[0].headers
    .filter(({ key }) => key !== "Strict-Transport-Security")
    .map(({ key, value }) => [key, value.replace("; upgrade-insecure-requests", "")]));
} catch {}
const notFound = await readFile(resolve(root, "404.html"));

function serve(request, response, bytes, type, status) {
  let encoding;
  const accepted = request.headers["accept-encoding"] ?? "";
  if (bytes.length > 1024 && /^(?:text\/|application\/xml|image\/svg)/.test(type)) {
    if (/\bbr\b/.test(accepted)) {
      bytes = brotliCompressSync(bytes, { params: { [constants.BROTLI_PARAM_QUALITY]: 4 } });
      encoding = "br";
    } else if (/\bgzip\b/.test(accepted)) {
      bytes = gzipSync(bytes);
      encoding = "gzip";
    }
  }
  response.writeHead(status, {
    ...securityHeaders,
    "Content-Type": type,
    "Content-Length": bytes.length,
    "Cache-Control": "no-store",
    ...(encoding ? { "Content-Encoding": encoding, Vary: "Accept-Encoding" } : {}),
  });
  response.end(request.method === "HEAD" ? undefined : bytes);
}

createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  try {
    const url = new URL(request.url, "http://localhost");
    const page = url.pathname.replace(/\/$/, "") || "/index.html";
    if (!allowedFiles.test(page)) throw new Error("Unknown path");
    const fileName = page.includes(".") ? page : page + ".html";
    const filePath = resolve(root, "." + fileName);
    if (!filePath.startsWith(root + sep)) throw new Error("Unknown path");
    const bytes = await readFile(filePath);
    serve(request, response, bytes, contentTypes.get(fileName.split(".").at(-1)), page === "/404.html" ? 404 : 200);
  } catch {
    serve(request, response, notFound, contentTypes.get("html"), 404);
  }
}).listen(port, "127.0.0.1", () => console.log(`CREDCO preview at http://127.0.0.1:${port}/`));
