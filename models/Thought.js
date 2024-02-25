const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const moment = require("moment");

const thoughtSchema = new Schema(
	{
		thoughtText: { type: String, required: true, minlength: 1, maxlength: 280, trim: true },

		createdAt: {
			type: Date,
			default: Date.now,
			get: createdAtValue => moment(createdAtValue).format("MMM DD, YYYY [at] h:mm A"),
		},

		username: { required: true, type: String },

		reactions: [reactionSchema],
	}

	// {
	// 	toJSON: {
	// 		virtuals: true,
	// 	},
	// 	id: false,
	// }
);
thoughtSchema.virtual("reactionCount").get(function () {
	return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
