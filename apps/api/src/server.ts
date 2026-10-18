import { app } from "./app.js";
import { db } from "./db.js";
try {
  await db.$queryRawUnsafe("PRAGMA journal_mode = WAL");
  await db.$queryRawUnsafe("PRAGMA busy_timeout = 10000");
} catch (err) {
  console.warn("PRAGMA initialization warning:", err);
}

if (!process.env.VERCEL) {
  const host = process.env.HOST || "0.0.0.0";
  const port = Number(process.env.PORT || 4000);
  const server = app.listen(port, host, () =>
    console.log(`Almost Formal API: http://${host}:${port}`),
  );
  const shutdown = () =>
    server.close(() => {
      void db.$disconnect().finally(() => process.exit(0));
    });
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
}

export default app;
