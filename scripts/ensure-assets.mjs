import { mkdir, access, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

const assets = {
  "public/images/rantakaulio-hero.webp":
    "https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/rantakaulio-hero.webp",
  "public/images/fleet-lineup.webp":
    "https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/fleet-lineup.webp",
  "public/images/truck-cutout.webp":
    "https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/truck-cutout.webp",
  "public/images/rantakaulio-portrait.webp":
    "https://raw.githubusercontent.com/Jambovisuaalit/juha-rantakaulio-website/main/public/images/rantakaulio-portrait.webp"
};

for (const [path, url] of Object.entries(assets)) {
  try {
    await access(path);
    continue;
  } catch {}

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Asset fetch failed: ${url} -> ${response.status}`);
  }

  await mkdir(dirname(path), { recursive: true });
  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(join(process.cwd(), path), bytes);
  console.log(`Fetched ${path}`);
}

const avifSources = ["rantakaulio-hero", "fleet-lineup"];

for (const name of avifSources) {
  const source = join(process.cwd(), "public/images", `${name}.webp`);
  const target = join(process.cwd(), "public/images", `${name}.avif`);

  try {
    await access(target);
  } catch {
    await sharp(source).avif({ quality: 55, effort: 4 }).toFile(target);
    console.log(`Generated ${target}`);
  }
}
