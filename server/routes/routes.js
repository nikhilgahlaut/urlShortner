import express from "express";
import { createShortUrl ,redirectToLongUrl } from "../controllers/controller.js";

const router = express.Router();

router.post("/shorten", createShortUrl);
//router.get("/:shortUrl", redirectToLongUrl);

export default router;