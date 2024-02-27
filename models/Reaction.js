const { Schema, model } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
		},
		reactionBody: { type: String, required: true, maxlength: 280, trim: true },
		username: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: createdAtValue => moment(createdAtValue).format("MMM DD, YYYY [at] h:mm A"),
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

module.exports = reactionSchema;
