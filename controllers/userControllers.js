const User = require("../models/User");

module.exports = {
	async getUsers(req, res) {
		try {
			const users = await User.find();
			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async getOneUser(req, res) {
		try {
			const user = await User.findOne({ _id: req.params.userId }).select("-__v");

			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async createNewUser(req, res) {
		try {
			const dbUserData = await User.create(req.body);
			res.json(dbUserData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
