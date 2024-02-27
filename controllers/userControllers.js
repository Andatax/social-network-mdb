const User = require("../models/User");

module.exports = {
	async getUsers(req, res) {
		try {
			const users = await User.find();
			res.json(users);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
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
			console.log(err);
		}
	},
	async createNewUser(req, res) {
		try {
			const dbUserData = await User.create(req.body);
			res.json(dbUserData);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
	async updateUser(req, res) {
		try {
			const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
				new: true,
			}).select("-__v");
			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
	async deleteUser(req, res) {
		try {
			const user = await User.findOneAndDelete({ _id: req.params.userId });
			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}
			res.json(user);
		} catch {
			res.status(500).json(err);
			console.log(err);
		}
	},
	async addFriend(req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.params.userId },
				{ $addToSet: { friends: req.params.friendId } },
				{ new: true }
			).select("-__v");
			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
	async deleteFriend(req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.params.userId },
				{ $pull: { friends: req.params.friendId } },
				{ new: true }
			).select("-__v");
			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
};
