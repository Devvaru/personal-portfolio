const projects: Readonly<Record<string, Readonly<Record<string, string | ReadonlyArray<string>>>>> = {
    project1: {
        title: "PawTrackr",
        url: "https://github.com/Devvaru/PawTrackr",
        imgs: ["/images/Homepage_View.png", "/images/Pet_Modal_View.png", "/images/Reminders_View.png"],
        frameworks: ["react", "react-bootstrap", "node.js", "javascript", "sass", "postgresql", "axios"]
    },
    project2: {
        title: "Photolabs",
        url: "https://github.com/Devvaru/Photolabs",
        imgs: ["/images/photolabs_home.png", "/images/photolabs_modal.png", "/images/photolabs_topic.png"],
        frameworks: ["react", "express.js", "postgresql"]
    },
    project3: {
        title: "Resource Wall",
        url: "https://github.com/Devvaru/resource-wall",
        imgs: ["/images/homepage-screenshot.jpg", "/images/my-favourites-screenshot.jpg", "/images/show-single-resource-screenshot.jpg"],
        frameworks: ["javascript", "jquery", "express.js", "ejs", "sass", "postgresql"]
    },
    project4: {
        title: "TwO-O-Player-Math-Game",
        url: "https://github.com/Devvaru/TwO-O-Player-Math-Game",
        imgs: [""],
        frameworks: ["ruby"]
    },
    project5: {
        title: "Etch-A-Sketch",
        url: "https://github.com/Devvaru/Etch-a-Sketch",
        imgs: ["/images/apple.jpg", "/images/portrait.jpg", "/images/photo.jpg"],
        frameworks: ["javascript", "html5", "css3"]
    },
};

export default projects;