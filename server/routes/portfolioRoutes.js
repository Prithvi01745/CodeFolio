import express from "express";
import {
  getPublicPortfolio,
  getPortfolioByDomain,
} from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/domain", getPortfolioByDomain);
router.get("/:username", getPublicPortfolio);

export default router;
