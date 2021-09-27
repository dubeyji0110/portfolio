/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
	/* Your Summary And Greeting Section */
	username: "Devansh Dubey",
	title: "Hi all, I'm Devansh",
	subTitle: emoji(
		"A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
	),
	resumeLink:
		"https://drive.google.com/file/d/1pBXhQNLIOveja4eWuTuKqigukbfsPYc2/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
	github: "https://github.com/dubeyji0110",
	linkedin: "https://www.linkedin.com/in/devansh-dubey-5701601b0/",
	gmail: "devanshdubey2001@gmail.com",
	instagram: "https://www.instagram.com/_cpp.freak",
};

// Your Skills Section

const skillsSection = {
	title: "What i do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji("⚡ Develop logic for Backend"),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Microsoft Azure"
		),
	],

	/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "fab fa-html5",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "fab fa-css3-alt",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "fab fa-js",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "fab fa-react",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "fab fa-node",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "fab fa-npm",
		},
		{
			skillName: "yarn",
			fontAwesomeClassname: "fab fa-yarn",
		},
		{
			skillName: "mongodb-database",
			fontAwesomeClassname: "fas fa-database",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "fab fa-aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "fas fa-fire",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "fab fa-python",
		},
	],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true,
	experience: [
		{
			Stack: "C++",
			progressPercentage: "80%",
		},
		{
			Stack: "Javascript",
			progressPercentage: "90%",
		},
		{
			Stack: "React JS",
			progressPercentage: "90%",
		},
		{
			Stack: "Node JS",
			progressPercentage: "90%",
		},
		{
			Stack: "Data Structures & Algorithms",
			progressPercentage: "89%",
		},
	],
};

const workExperiences = {
	viewExperiences: false, //Set it to true to show workExperiences Section
	experience: [],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	githubConvertedToken:
		"MjgwNWM3NzJhOGE4OTAzMDNlMzA2N2NhZWIxNjU1OGQ0NWZkOTg1OQ==",
	githubUserName: "dubeyji0110",
	showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
	title: "Projects",
	subtitle: "SOME PROJECTS TO SHOWCASE MY SKILLS",
	projects: [
		// {
		//   image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
		//   link: "http://saayahealth.com/"
		// },
		// {
		//   image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
		//   link: "http://nextu.se/"
		// }
	],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
	title: emoji("Achievements And Certifications 🏆 "),
	subtitle:
		"Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

	achivementsCards: [
		// {
		//   title: "Google Code-In Finalist",
		//   subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
		//   image:
		//     "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
		//   footerLink: [
		//     { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
		//   ]
		// },
	],
};

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
		"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

	blogs: [
		// {
		// 	url: "https://medium.com/@sudiptdabral2991999/create-your-own-c-c-ide-with-node-js-react-a81b442a8a6e",
		// 	title: "Create your Own IDE using React and Node JS",
		// 	description:
		// 		"Do you wanna your cool IDE? Well, here is the link how you can do it!",
		// },
		// {
		// 	url: "https://medium.com/@sudiptdabral2991999/creating-a-rest-api-with-node-js-express-js-and-test-it-using-postman-497a062523a1",
		// 	title: "Create a Rest API using Node, Express and Test using Postman",
		// 	description:
		// 		"A brief tutorial for creating a REST API and how to test it",
		// },
	],
};

// Talks Sections

const talkSection = {
	title: "TALKS",
	subtitle: emoji(
		"I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
	),

	talks: [],
};

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

	// Please Provide with Your Podcast embeded Link
	podcast: [],
};

const contactInfo = {
	title: emoji("Contact Me ☎️"),
	subtitle:
		"Discuss a project or just want to say hi? My Inbox is open for all.",
	number: "+91-707820809",
	email_address: "devanshdubey2001@gmail.com",
};

//Twitter Section

const twitterDetails = {
	userName: "duebyji0110", //Replace "twitter" with your twitter username without @
};
export {
	greeting,
	socialMediaLinks,
	skillsSection,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
};
