import mta from "../../assets/Portfolio/mta.png";
import flipkartClone from "../../assets/Portfolio/flipkart-clone.png";
import chatbox from "../../assets/Portfolio/chatbox.png";
import raycues from "../../assets/Portfolio/raycues.png";
import purpleGlib from "../../assets/Portfolio/purple-glib.png";
import weather from "../../assets/Portfolio/weather.png";
import todo from "../../assets/Portfolio/todo.png";
import google from "../../assets/Portfolio/google.png";

export const projectsData = [
    {
        id: 1,
        image: mta,
        title: "Mobillor Talent Accelerator",
        category: "Professional",
        languages: "ReactJs, Redux, MaterialUi ",
        githubLink: "/",
        demoLink: "https://mta.mobillor.net/",
        githubVisibility: 0,
    },
    {
        id: 2,
        image: flipkartClone,
        title: "Flipkart Clone",
        category: "Personal",
        languages: "ReactJs, MaterialUi ",
        githubLink: "/",
        demoLink: "/",
        githubVisibility: 1,
    },
    {
        id: 3,
        image: chatbox,
        title: "Chatbox",
        category: "Personal",
        languages: "NodeJs, Socket.IO, HTML, CSS",
        githubLink: "/",
        demoLink: "/",
        githubVisibility: 1,
    },
    {
        id: 4,
        image: raycues,
        title: "Raycues",
        category: "Professional",
        languages: "NextJs, Javascript, HTML, CSS, Bootstrap",
        githubLink: "/",
        demoLink: "https://rayques.com/",
        githubVisibility: 0
    },
    {
        id: 5,
        image: purpleGlib,
        title: "Purple Glib",
        category: "Personal",
        languages: "NextJs, ReactJs, MaterialUi ",
        githubLink: "/",
        demoLink: "/",
        githubVisibility: 1
    },
    {
        id: 5,
        image: weather,
        title: "Weather App",
        category: "Personal",
        languages: "NextJs, ReactJs, MaterialUi ",
        githubLink: "/",
        demoLink: "https://sarnendu-weather-app.netlify.app/",
        githubVisibility: 1
    },
    {
        id: 5,
        image: todo,
        title: "Todo List",
        category: "Personal",
        languages: "Javascript, HTML, CSS, Bootstrap",
        githubLink: "/",
        demoLink: "https://sarnendu-todolist.netlify.app/",
        githubVisibility: 1
    },
    {
        id: 6,
        image: google,
        title: "Google Clone",
        category: "Personal",
        languages: "NextJs, ReactJs",
        githubLink: "/",
        demoLink: "https://google-clone-sarnendu.vercel.app/",
        githubVisibility: 1
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Professional",
    },
    {
        name: "Personal",
    },
   
];