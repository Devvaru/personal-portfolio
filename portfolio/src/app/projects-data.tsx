import { Project } from './types';

const projects: Record<string, Project> = {
    project1: {
        title: "PawTrackr",
        url: "https://github.com/Devvaru/PawTrackr",
        imgs: [`/images/pawtrackr-1.jpg`, `/images/pawtrackr-2.jpg`, `/images/pawtrackr-3.jpg`],
        description: "Full stack web app that enables you to manage all your pet care needs. Schedule feeding time, create exercise reminders, and vet appointments. Includes a calendar, drag & drop, and pagination",
        frameworks: ["React", "React-Bootstrap", "Node.js", "JavaScript", "Sass", "Postgresql", "Axios"]
    },
    project2: {
        title: "Photolabs",
        url: "https://github.com/Devvaru/Photolabs",
        imgs: [`/images/photolabs-1.jpg`, `/images/photolabs-2.jpg`, `/images/photolabs-3.jpg`],
        description: "Photolabs is a React based web app where you can view and favourite the photos of photographers, as well as search photos by topic.",
        frameworks: ["React", "Express.js", "PostgreSQL"]
    },
    project3: {
        title: "Resource Wall",
        url: "https://github.com/Devvaru/resource-wall",
        imgs: [`/images/resourcewall-1.jpg`, `/images/resourcewall-2.jpg`, `/images/resourcewall-3.jpg`],
        description: "Resource Wall is a resource sharing site that allows users to save and share learning resources — such as tutorials, blogs and videos — in a central place, publicly available to any user.",
        frameworks: ["JavaScript", "jQuery", "Express.js", "EJS", "Sass", "PostgreSQL"]
    },
    project4: {
        title: "TwO-O-Player-Math-Game",
        url: "https://github.com/Devvaru/TwO-O-Player-Math-Game",
        imgs: [],
        description: "A 2-Player CLI based math game written in Ruby, where players take turns to answer simple math addition problems. A new math question is generated for each turn by picking two numbers between 1 and 20. The player whose turn it is is prompted the question and must answer correctly or lose a life.",
        frameworks: ["Ruby"]
    },
    project5: {
        title: "Etch-A-Sketch",
        url: "https://github.com/Devvaru/Etch-a-Sketch",
        imgs: [`/images/etch-a-sketch-1.jpg`, `/images/etch-a-sketch-2.jpg`, `/images/etch-a-sketch-3.jpg`],
        description: "Etch-a-Sketch is an online drawing canvas where you can use various tools to create beautiful pixel art, including a colour picker, a grayscale pencil, and a color randomizer. You also have the option to change canvas size to your liking. NOTE: The app functions well, however the code needs refactoring. V2 coming soon!",
        frameworks: ["JavaScript", "HTML5", "CSS3"]
    },
};

export default projects;