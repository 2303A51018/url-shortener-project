const express = require("express");
const shortid = require("shortid");
const Url = require("../models/Url");
const router = express.Router();
router.post("/shorten", async (req, res) => {
    const { originalUrl } = req.body;
    const shortId = shortid.generate();
    const newUrl = new Url({shortId, originalUrl});
    await newUrl.save();
    res.json({ shortUrl: `http://localhost:3000/${shortId}` });
});
router.get("/:shortId", async (req, res) => {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });
    if (url) {
        res.redirect(url.originalUrl);
    } else {
        res.status(404).json({ error: "URL not found" });
    });
    module.exports = router;
    
