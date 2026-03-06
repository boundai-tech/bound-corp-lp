#!/usr/bin/env node
/**
 * Upload videos to Vercel Blob
 * 1. Create Blob store: https://vercel.com/dashboard → Storage → Create → Blob
 * 2. Add BLOB_READ_WRITE_TOKEN to .env.local (from the Blob store settings)
 * 3. Run: node scripts/upload-videos.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Load .env.local
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "../.env.local");
if (existsSync(envPath)) {
  const env = readFileSync(envPath, "utf8");
  for (const line of env.split("\n")) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, "");
  }
}

import { put } from "@vercel/blob";

const baseDir = join(__dirname, "../public/contents/screenshots");

const videos = [
  { file: "hero-demo-4k.mp4", path: "hero-demo-4k.mp4" },
  { file: "highlight1.mp4", path: "highlight1.mp4" },
  { file: "screening.mp4", path: "screening.mp4" },
];

async function main() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("Error: BLOB_READ_WRITE_TOKEN not set. Add it to .env.local");
    console.error("Get it from: Vercel Dashboard → Storage → your Blob store");
    process.exit(1);
  }

  const urls = {};
  for (const { file, path } of videos) {
    const filePath = join(baseDir, file);
    const buffer = readFileSync(filePath);
    const blob = await put(path, buffer, {
      access: "public",
      contentType: "video/mp4",
      allowOverwrite: true,
    });
    urls[path.replace(".mp4", "")] = blob.url;
    console.log(`Uploaded ${file} → ${blob.url}`);
  }

  // Update lib/config/videos.ts
  const configPath = join(__dirname, "../lib/config/videos.ts");
  const config = `/**
 * Video URLs - hosted on Vercel Blob
 */
export const videoUrls = {
  hero: "${urls["hero-demo-4k"]}",
  highlight1: "${urls.highlight1}",
  screening: "${urls.screening}",
};
`;
  writeFileSync(configPath, config);
  console.log("\n✓ Updated lib/config/videos.ts");
  console.log("\nRun: git add lib/config/videos.ts && git commit -m 'Update video URLs' && git push");
}

main().catch(console.error);
