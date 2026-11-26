import { JSDOM, VirtualConsole } from "jsdom";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = process.argv[2] ? resolve(process.argv[2]) : dirname(dirname(fileURLToPath(import.meta.url)));
const { SITE_ORIGIN, EMAIL, INSTAGRAM_URL, FACEBOOK_URL } = await import(pathToFileURL(resolve(root, "js/site-config.js")));

const files = await Promise.all(["vendor.js", "site-config.js", "image-variants.js", "credco.js"]
  .map((name) => readFile(resolve(root, "js", name), "utf8")));
const application = files.map((source) => source
  .replace(/^import\s*\{[^}]+\}\s*from\s*["'][^"']+["'];\s*/gm, "")
  .replace(/^export\s*\{[^}]+\}\s*;\s*$/gm, "")
  .replace(/^export const /gm, "const ")).join("\n");

const routes = new Set(["/", "/about", "/services", "/projects", "/gallery", "/reviews",
  "/process", "/blog", "/contact", "/consultation", "/faq", "/privacy-policy",
  "/terms-and-conditions", "/404"]);
const internalPage = /^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)?)?$/;
const heroFile = "/media/hero-luxury-residence.webp";
const template =
  '<!doctype html><html lang="en"><head>' +
  '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
  '<meta name="theme-color" content="#0E0D0B"><meta property="og:type" content="website">' +
  '<meta property="og:site_name" content="CREDCO"><meta name="twitter:card" content="summary_large_image">' +
  '<title>CREDCO</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">' +
  '<link rel="stylesheet" href="/css/fonts.css"><link rel="stylesheet" href="/css/credco.css">' +
  '<link rel="stylesheet" href="/css/site.css">' +
  '</head><body class="bg-[#FAF8F3] text-[#171613] antialiased selection:bg-[#C9A34A]/25 selection:text-[#0E0D0B]">' +
  '<div id="root"></div></body></html>';

const virtualConsole = new VirtualConsole();
const errorLog = [];
virtualConsole.on("jsdomError", (error) => errorLog.push(error));
virtualConsole.on("error", (...errors) => errorLog.push(...errors));

async function render(route) {
  const dom = new JSDOM(template, {
    url: SITE_ORIGIN + route,
    runScripts: "outside-only",
    pretendToBeVisual: true,
    virtualConsole,
  });
  try {
    const { window } = dom;
    const { document } = window;
    window.scrollTo = () => {};
    window.matchMedia = (media) => ({
      media, matches: false,
      addEventListener() {}, removeEventListener() {},
      addListener() {}, removeListener() {},
    });
    window.sessionStorage.setItem("credco_welcome_popup_seen", "1");
    window.eval(application);
    for (let attempt = 0; attempt < 100 && !document.head.querySelector('meta[name="description"]'); attempt++) {
      await new Promise((ready) => setTimeout(ready, 10));
    }
    if (errorLog.length) throw new Error(errorLog.splice(0).map(String).join("\n"));
    if (!document.querySelector("main h1") || !document.head.querySelector('meta[name="description"]')) {
      throw new Error("Incomplete HTML render for " + route);
    }
    if ((route === "/404") !== (document.querySelector('meta[name="robots"]').content === "noindex, follow")) {
      throw new Error("Unexpected indexing metadata on " + route);
    }
    for (const link of document.querySelectorAll("a[href^='/']")) {
      const href = link.getAttribute("href");
      if (internalPage.test(href)) routes.add(href);
    }
    const image = document.querySelector("main img[src]");
    const imageUrl = SITE_ORIGIN + (image?.getAttribute("src") ?? heroFile);
    for (const [attribute, name] of [["property", "og:image"], ["name", "twitter:image"]]) {
      const tag = document.createElement("meta");
      tag.setAttribute(attribute, name);
      tag.content = imageUrl;
      document.head.append(tag);
    }
    if (route === "/" && image) {
      const preload = document.createElement("link");
      preload.rel = "preload";
      preload.as = "image";
      preload.setAttribute("imagesrcset", image.getAttribute("srcset"));
      preload.setAttribute("imagesizes", image.getAttribute("sizes"));
      preload.setAttribute("fetchpriority", "high");
      document.head.prepend(preload);
      document.head.prepend(document.querySelector("meta[charset]"));
    }
    const structured = document.createElement("script");
    structured.type = "application/ld+json";
    structured.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: "CREDCO – Creative Design And Construction Pvt. Ltd.",
      alternateName: "CREDCO",
      url: SITE_ORIGIN + "/",
      telephone: "+91-9730006820",
      email: EMAIL,
      slogan: "Building Your Dream Life",
      description: "Building construction, interior design, exterior design, renovation, 3D elevation and architectural planning.",
      sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
    }).replace(/</g, "\\u003c");
    if (route !== "/404") document.head.append(structured);
    const module = document.createElement("script");
    module.type = "module";
    module.src = "/js/credco.js";
    document.head.append(module);

    for (const option of document.querySelectorAll("select option")) {
      option.toggleAttribute("selected", option.selected);
    }

    if (document.querySelector("main form")) {
      const noScript = document.createElement("noscript");
      noScript.innerHTML = '<style>main form { display: none }</style><p class="form-fallback">Contact CREDCO by <a href="https://wa.me/919730006820">WhatsApp</a> or <a href="mailto:' + EMAIL + '">email</a>.</p>';
      document.querySelector("main").prepend(noScript);
    }
    // Preserve exact inline spacing while keeping head tags and main sections easy to locate.
    const html = dom.serialize()
      .replace("<html", "\n<html")
      .replace("<head>", "\n<head>\n  ")
      .replace(/>(?=<(?:meta |title>|link |script ))/g, ">\n  ")
      .replace("</head>", "\n</head>")
      .replace("<body", "\n<body")
      .replace(/(?=<(?:header |main |section |footer ))/g, "\n  ")
      .replace("</body></html>", "\n</body>\n</html>\n");
    const target = resolve(root, route === "/" ? "index.html" : route.slice(1) + ".html");
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  } finally {
    dom.window.close();
  }
}

for (const route of routes) await render(route);
const published = [...routes].filter((route) => route !== "/404").sort();
await writeFile(resolve(root, "sitemap.xml"), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...published.map((route) => "  <url><loc>" + SITE_ORIGIN + route + "</loc></url>"),
  "</urlset>",
  "",
].join("\n"));
await writeFile(resolve(root, "robots.txt"), "User-agent: *\nAllow: /\n\nSitemap: " + SITE_ORIGIN + "/sitemap.xml\n");
console.log("Rendered " + published.length + " pages, a custom 404, sitemap.xml, and robots.txt.");
