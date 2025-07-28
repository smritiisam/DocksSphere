import express from "express";
import authRoutes from "./routes/auth.routes.js";

export function createServer() {
  const app = express();

  // Middleware
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Root route
  app.get("/", (_, res) =>
    res.json({ message: "Multi-tenant Admin API", version: "1.0.0" })
  );

  app.use("/api/auth", authRoutes);

  // Global error handler
  app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  });

  // Health-check
  app.get("/health", (_, res) =>
    res.json({ status: "ok", timestamp: Date.now() })
  );

  // TODO: other routes in later phases
  return app;
}
