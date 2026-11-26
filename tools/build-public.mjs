import { cp, mkdir, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = resolve(root, "dist");
const publicFolders = ["blog", "css", "fonts", "js", "media", "projects", "services"];
const publicFiles = (await readdir(root)).filter((name) =>
  name.endsWith(".html") || ["favicon.svg", "sitemap.xml", "robots.txt"].includes(name)
);
await mkdir(output, { recursive: true });
await Promise.all([...publicFiles, ...publicFolders].map((name) =>
  cp(resolve(root, name), resolve(output, name), { recursive: true })
));
console.log("Static CREDCO website staged in dist.");
