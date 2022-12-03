const express = require("express");
const { route } = require("./userRoutes");
const router = express.Router();

const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);

module.exports = router;
