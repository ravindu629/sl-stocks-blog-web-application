import express from "express";
import {
  registerSubscriber,
  getSubscribers,
} from "../controllers/subscriberController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerSubscriber).get(protect, admin, getSubscribers);

export default router;
