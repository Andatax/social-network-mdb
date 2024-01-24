const Thought = require("../models/Thought");

module.exports = {
	async getThoughts(req, res) {
		try {
			const thoughts = await Thought.find();
			res.json(thoughts);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async getOneThought(req, res) {
		try {
			const thought = await Thought.findOne({ _id: req.params.thoughtId }).select("-__v");

			if (!thought) {
				return res.status(404).json({ message: "Thought not found" });
			}
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	async createNewThought(req, res) {
		try {
			const dbThoughtData = await Thought.create(req.body);
			res.json(dbThoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
