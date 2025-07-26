import express from "express";

export function createServer() {
  const app = express();

  // Root route
  app.get("/", (_, res) =>
    res.json({ message: "Multi-tenant Admin API", version: "1.0.0" })
  );

  // Health-check
  app.get("/health", (_, res) =>
    res.json({ status: "ok", timestamp: Date.now() })
  );

  // TODO: other routes in later phases
  return app;
}
