const router = require("express").Router();
const videoRoutes = require("./videoRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;
