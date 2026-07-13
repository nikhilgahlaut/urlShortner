import Url from "../Schema/urlSchema.js";
import { nanoid } from "nanoid";
import validator from "validator";

export const createShortUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!validator.isURL(longUrl)) {
    return res.status(400).json({
      error: "Invalid URL",
    });
  }

  try {
    const existingUrl = await Url.findOne({ longUrl });

    if (existingUrl) {
      return res.status(200).json({
        message: "URL already exists",
        shortUrl: `http://localhost:4000/${existingUrl.shortUrl}`,
        longUrl: existingUrl.longUrl,
      });
    }

    const shortCode = nanoid(7);

    await Url.create({
      longUrl,
      shortUrl: shortCode,
    });

    return res.status(201).json({
      message: "Short URL created successfully",
      shortUrl: `http://localhost:4000/${shortCode}`,
      longUrl,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

export const redirectToLongUrl = async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const urlEntry = await Url.findOne({ shortUrl });

    if (!urlEntry) {
      return res.status(404).json({
        error: "Short URL not found",
      });
    }

    return res.redirect(urlEntry.longUrl);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
};