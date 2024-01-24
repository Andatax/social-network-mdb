const router = require("express").Router();
const { getThoughts, getOneThought, createNewThought } = require("../../controllers/thoughtControllers");

router.route("/").get(getThoughts).post(createNewThought);

router.route("/:thoughtId").get(getOneThought);

module.exports = router;
