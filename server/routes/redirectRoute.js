import express from "express";
import { redirectToLongUrl } from "../controllers/controller.js";

const router = express.Router();

router.get("/:shortUrl", redirectToLongUrl);

export default router;