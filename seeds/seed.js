const connection = require("../config/connection");
const Thought = require("../models/Thought");
const User = require("../models/User");
const { getRandomUsername, getRandomThoughts, getRandomReaction, getRandomEmails } = require("./data");

connection.on("error", err => err);

connection.once("open", async () => {
	console.log("connected");

	try {
		await User.collection.deleteMany({});
		// console.log("Deleted users");

		// const emails = getRandomEmails(20);
		const thoughts = [];
		const users = [];
		const usernames = [];

		for (let i = 0; i < 20; i++) {
			// const thoughts = [];
			let randomUsername = getRandomUsername();
			let randomEmail = `${randomUsername}@example.com`;

			while (usernames.includes(randomUsername)) {
				// console.log('generating user');
				randomUsername = getRandomUsername();
				randomEmail = `${randomUsername}@example.com`;
			}

			const randomThoughts = getRandomThoughts(1)[0].thoughts;
			// console.log(randomThoughts);
			const randomReaction = getRandomReaction(1)[0].reactions;
			thoughts.push({
				thoughtText: randomThoughts,
				username: randomUsername,
				reactions: randomReaction,
			});

			console.log(`Inserting user with email: ${randomEmail} and username: ${randomUsername}`);

			if (!randomEmail) {
				process.exit(1);
			}
			// console.log(thoughts);

			users.push({
				username: randomUsername,
				email: randomEmail,
				thoughts: thoughts,
			});
			usernames.push(randomUsername);

			// await User.collection.insertOne(users[i]);
		}
		console.table(thoughts);
		console.table(users);

		console.log(`Seeding complete. Seed count: ${thoughts.length}`);
		await User.collection.insertMany(users);
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
