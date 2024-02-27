const router = require("express").Router();
const {
	getUsers,
	getOneUser,
	createNewUser,
	updateUser,
	deleteUser,
	addFriend,
	deleteFriend,
} = require("../../controllers/userControllers");

router.route("/").get(getUsers).post(createNewUser);

router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
