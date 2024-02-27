const router = require("express").Router();
const {
	getThoughts,
	getOneThought,
	createNewThought,
	updateThought,
	deleteThought,
	createNewReaction,
	deleteReaction,
} = require("../../controllers/thoughtControllers");

router.route("/").get(getThoughts).post(createNewThought);

router.route("/:thoughtId").get(getOneThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(createNewReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
