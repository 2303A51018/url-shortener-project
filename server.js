const express = require("express");
const mongoose = require("mongoose");
const urlRoutes = require("./routes/urlRoutes");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/urlshortener")
.then(()=>console.log("MongoDB Connected"));
app.use("/", urlRoutes);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
