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
	async updateThought(req, res) {
		try {
			const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body, {
				new: true,
			}).select("-__v");
			if (!thought) {
				return res.status(404).json({ message: "Thought not found" });
			}
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
	async deleteThought(req, res) {
		try {
			const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
			if (!thought) {
				return res.status(404).json({ message: "Thought not found" });
			}
			res.json(thought);
		} catch {
			res.status(500).json(err);
			console.log(err);
		}
	},
	async createNewReaction(req, res) {
		try {
			const thought = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $push: { reactions: req.body } },
				{ new: true, runValidators: true, upsert: true }
			);
			if (!thought) {
				return res.status(404).json({ message: "Thought not found" });
			}
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
	async deleteReaction(req, res) {
		try {
			const thought = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $pull: { reactions: { _id: req.params.reactionId } } },
				{ new: true }
			).select("-__v");
			if (!thought) {
				return res.status(404).json({ message: "Thought not found" });
			}
			if (!thought.reactions) {
				return res.status(404).json({ message: "Reaction not found" });
			}
			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	},
};
