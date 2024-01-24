const router = require("express").Router();
const { getUsers, getOneUser, createNewUser } = require("../../controllers/userControllers");


router.route("/").get(getUsers).post(createNewUser);

router.route("/:userId").get(getOneUser);

module.exports = router;
