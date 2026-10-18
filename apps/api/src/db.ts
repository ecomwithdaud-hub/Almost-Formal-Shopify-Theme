import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
import path from "node:path";

function setupDatabaseUrl(): string {
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  if (process.env.VERCEL) {
    const tmpDir = "/tmp/af-db";
    const tmpDbPath = path.join(tmpDir, "dev.db");
    try {
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
      if (!fs.existsSync(tmpDbPath)) {
        const candidates = [
          path.resolve(process.cwd(), "apps/api/prisma/dev.db"),
          path.resolve(process.cwd(), "prisma/dev.db"),
          path.resolve(process.cwd(), "dev.db"),
          path.join(path.dirname(new URL(import.meta.url).pathname), "../prisma/dev.db"),
        ];
        let copied = false;
        for (const candidate of candidates) {
          if (fs.existsSync(candidate)) {
            fs.copyFileSync(candidate, tmpDbPath);
            console.log(`Initialized database from ${candidate} to ${tmpDbPath}`);
            copied = true;
            break;
          }
        }
        if (!copied) {
          console.warn("Could not find seeded dev.db to copy to /tmp");
        }
      }
    } catch (err) {
      console.warn("Failed setting up database in /tmp:", err);
    }
    return `file:${tmpDbPath}`;
  }

  return "file:./dev.db";
}

process.env.DATABASE_URL = setupDatabaseUrl();
export const db = new PrismaClient();
