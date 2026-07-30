import User from "../models/User.js";

export const getPublicPortfolio = async (req, res) => {
  try {
    const username = req.params.username.toLowerCase();
    const user = await User.findOne({ username }).select(
      "-password -email"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    res.status(200).json({ success: true, portfolio: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPortfolioByDomain = async (req, res) => {
  try {
    const host = req.headers.host?.split(":")[0]?.toLowerCase();

    if (!host || host === "localhost") {
      return res.status(400).json({
        success: false,
        message: "No custom domain detected",
      });
    }

    const user = await User.findOne({ customDomain: host, isPro: true }).select(
      "-password -email"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found for this domain",
      });
    }

    res.status(200).json({ success: true, portfolio: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
