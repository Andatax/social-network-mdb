const usernames = [
	"AlphaUser123",
	"BetaExplorer",
	"QuantumCoder",
	"StarGazerX",
	"PixelPioneer",
	"CyberNinja89",
	"LunarDreamer",
	"MysticPhoenix",
	"TechSavvy2024",
	"SkyCaptain23",
	"NeonNomad",
	"DigitalVoyager",
	"ShadowSeeker",
	"TerraTechie",
	"InfinityGeek",
	"CryptoCrusader",
	"CodeMaverick",
	"GalaxyPilot",
	"QuantumQuest",
	"SparkScribe",
];

const thoughts = [
	"Embracing Change: Navigating Transitions in Everyday Life",
	"Finding Joy in the Simple Moments: A Guide to Mindful Living",
	"Balancing Act: Juggling Work, Family, and Self-Care",
	"The Art of Effective Communication in Daily Interactions",
	"Unplugging in a Hyperconnected World: Digital Detox Strategies",
	"Building Healthy Habits: Small Steps to a Better Lifestyle",
	"Exploring Local Gems: Rediscovering Your Hometown",
	"The Power of Gratitude: Cultivating Positivity Daily",
	"Making Time for Hobbies: A Recipe for Work-Life Balance",
	"From Chaos to Calm: Organizing Your Daily Routine",
	"The Impact of Laughter: Comedy and Well-Being",
	"Nurturing Relationships: Keys to Meaningful Connections",
	"Everyday Adventures: Finding Excitement in the Ordinary",
	"Crafting Your Morning Routine for a Productive Day",
	"Embracing Imperfection: A Guide to Self-Acceptance",
];
const reactions = [
	"This is intriguing! I love how you've approached this topic.",
	"I never thought about it from this perspective. Great insights!",
	"Mind-blowing stuff! Can't wait to read more on this subject.",
	"As a [reader/enthusiast/professional], I find this incredibly interesting.",
	"Always fascinated by [topic]. Looking forward to your take on it!",
	"This is a topic that needs more attention. Thank you for covering it!",
	"The way you've presented this information is engaging and informative.",
	"Count me in for exploring more about [topic]. Your post has piqued my interest.",
	"It's so important to discuss [topic], and you've done it brilliantly here.",
	"Kudos for shedding light on [topic]. Looking forward to your future posts!",
];
const emails = [
	"user1@example.com",
	"person123@example.com",
	"contact_me@example.com",
	"username_42@example.com",
	"email_me@example.com",
	"sample_email@example.com",
	"test_user@example.com",
	"webmaster@example.com",
	"random.email@example.com",
	"my_email@example.com",
];

const getRandomData = array => array[Math.floor(Math.random() * array.length)];
const getRandomUsername = () => {
	const shuffledUsernames = usernames.slice().sort(() => Math.random() - 0.5);
	return shuffledUsernames.pop();
};

const getRandomThoughts = int => {
	const results = [];
	for (let i = 0; i < int; i++) {
		results.push({
			thoughts: getRandomData(thoughts),
		});
	}
	return results;
};

const getRandomReaction = int => {
	const results = [];
	for (let i = 0; i < int; i++) {
		results.push({
			reactions: getRandomData(reactions),
		});
	}
	return results;
};
const getRandomEmails = int => {
	const shuffledEmails = emails.slice().sort(() => Math.random() - 0.5);
	return shuffledEmails.slice(0, int);
};

module.exports = { getRandomUsername, getRandomThoughts, getRandomReaction, getRandomEmails };
