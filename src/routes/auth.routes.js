import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route to test authentication
router.get("/profile", authenticate, (req, res) => {
  res.json({
    success: true,
    message: "Profile data",
    data: {
      user: req.user,
    },
  });
});

export default router;
