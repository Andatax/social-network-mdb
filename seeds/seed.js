const connection = require("../config/connection");
const Thought = require("../models/Thought");
const User = require("../models/User");
const { getRandomUsername, getRandomThoughts, getRandomReaction, getRandomEmails } = require("./data");

connection.on("error", err => err);

connection.once("open", async () => {
	console.log("connected");

	try {
		// Debug code to delete all users since some had duplicate emails
		await User.collection.deleteMany({});
		// console.log("Deleted users");

		const thoughts = [];
		const emails = getRandomEmails(20);

		for (let i = 0; i < 20; i++) {
			let randomUsername = getRandomUsername();
			let randomEmail = getRandomEmails(1)[0];

			while (await User.findOne({ $or: [{ username: randomUsername }, { email: randomEmail }] })) {
				randomUsername = getRandomUsername();
				randomEmail = getRandomEmails(1)[0];
			}

			const randomThoughts = getRandomThoughts(1)[0].thoughts; // Extract the thoughts from the returned object
			const randomReaction = getRandomReaction(1)[0].reactions; // Extract the reactions from the returned object

			console.log(`Inserting user with email: ${randomEmail} and username: ${randomUsername}`);

			if (!randomEmail) {
				process.exit(1);
			}

			thoughts.push({
				thoughtText: randomThoughts,
				username: randomUsername,
				reactions: randomReaction,
			});

			await User.collection.insertOne({
				username: randomUsername,
				email: randomEmail,
				thoughts: [{ thoughts: randomThoughts }], // Wrap the thoughts in an array
			});
		}

		await Thought.collection.insertMany(thoughts);
		console.table(thoughts);
		console.info("Seeds done");
		await connection.close();
		process.exit(1);
	} catch (error) {
		console.error(error);
		process.exit(1);
	} finally {
		await connection.close();
	}
});
