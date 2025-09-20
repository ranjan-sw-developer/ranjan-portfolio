// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import flutterLogo from "./assets/tech_logo/flutter.png";
import dartLogo from "./assets/tech_logo/dart.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import niveusLogo from "./assets/company_logo/niveus.jpeg";

// Education Section Logo's
import amcLogo from "./assets/education_logo/amc.jpeg";
import mitLogo from "./assets/education_logo/mit.jpeg";

// Project Section Logo's
import quickGptImage from "./assets/work_logo/quick_gpt.png";
import taskManagerImage from "./assets/work_logo/task_manager.png";
import spotifyImage from "./assets/work_logo/spotify.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "Flutter", logo: flutterLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "React Native", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      // { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Dart", logo: dartLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: niveusLogo,
    role: "Cloud Specialist",
    company: "Niveus Solutions Pvt. Ltd (Part of NTT DATA)",
    date: "October 2024 - Present",
    desc: "I’m a Full Stack Developer at Niveus Solutions Pvt. Ltd, where I’ve spent the past 5 years designing and delivering high-quality web and mobile solutions. Recognized as Star of the Month five times, I’ve contributed to multiple high-profile projects, collaborating with cross-functional teams to build seamless, impactful applications.",
    skills: [
      "Flutter",
      "React JS",
      "Redux",
      "Next Js",
      "React Native",
      "Tailwind CSS",
      "TypeScript",
      "Node JS",
      "MongoDb",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: 1,
    img: niveusLogo,
    role: "Cloud Engineer",
    company: "Niveus Solutions Pvt. Ltd",
    date: "April 2022 - October 2024",
    desc: "I worked as a Cloud Engineer at Niveus Solutions, developing high-performance web and mobile applications using Flutter, React.js, Redux, and other modern technologies. I focused on delivering scalable solutions, optimizing performance, and enhancing user experience across multiple high-impact projects.",
    skills: [
      "Flutter",
      "React JS",
      "React Native",
      "Redux",
      "Tailwind CSS",
      "TypeScript",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    id: 2,
    img: niveusLogo,
    role: "Cloud Associate",
    company: "Niveus Solutions Pvt. Ltd",
    date: "June 2020 - April 2022",
    desc: "I worked as a Cloud Associate at Niveus Solutions, focusing on building dynamic web and mobile applications using React.js and React Native. I contributed to multiple client projects, delivering responsive, scalable, and user-friendly solutions.",
    skills: ["React JS", "React Native", "HTML", "CSS", "JavaScript"],
  },
];

export const education = [
  {
    id: 0,
    img: mitLogo,
    school: "Manipal Institute of Technology, Manipal",
    date: "July 2018 - June 2020",
    grade: "7.2 CGPA",
    desc: "I hold an M.Tech in Computer Network Engineering from Manipal Institute of Technology. My post-graduate studies strengthened my expertise in networking, system design, and emerging technologies, forming a strong foundation for my development career.",
    degree: "M.Tech - Computer Network Engineering",
  },
  {
    id: 1,
    img: amcLogo,
    school: "AMC Engineering College, Bangalore",
    date: "July 2013 - June 2017",
    grade: "70%",
    desc: "I earned my B.E. in Computer Science Engineering from AMC Engineering College, Bangalore, building a strong foundation in programming, algorithms, and software development.",
    degree: "BE - Computer Science and Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "QuickGPT - Intelligent AI Assistant",
    description:
      "QuickGPT is a sleek and intelligent AI-powered assistant built with the MERN stack. It allows users to start conversations instantly, ask questions, and receive quick, accurate responses. With features like conversation history, dark mode, and credit-based usage, QuickGPT ensures a smooth and interactive chat experience. Deployed on Vercel, it’s designed for speed, reliability, and modern UI aesthetics, making it a go-to tool for anyone seeking AI assistance.",
    image: quickGptImage,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "AI", "Chatbot"],
    github: "https://github.com/ranjan-sw-developer/quick-gpt",
    webapp: "https://quick-gpt-fawn.vercel.app/",
  },
  {
    id: 1,
    title: "Task Manager - Smart Productivity Dashboard",
    description:
      "Task Manager is a full-stack MERN application designed to simplify team collaboration and task tracking. It provides users with a modern dashboard to create, assign, and manage tasks effortlessly. With features like task distribution charts, priority-level insights, and role-based access, it ensures productivity and clarity for both individuals and teams. The clean UI and real-time updates make it a powerful tool for managing daily workflows efficiently.",
    image: taskManagerImage,
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Charts.js",
      "Dashboard",
    ],
    github: "https://github.com/ranjan-sw-developer/task-manager",
    webapp: "https://task-manager-ua1x.vercel.app",
  },
  {
    id: 2,
    title: "Spotify Clone - Flutter Music Streaming App",
    description:
      "A beautifully crafted Spotify-inspired music streaming application built with Flutter. Designed using Clean Architecture and powered by Bloc state management, it ensures scalability and maintainability. With Firebase integration, it supports real-time authentication, cloud storage, and seamless music data handling. Users can explore trending tracks, view artist profiles, stream music, read synced lyrics, and manage playlists. The modern UI closely mirrors Spotify’s sleek design, offering an immersive and responsive experience across devices.",
    image: spotifyImage,
    tags: ["Flutter", "Bloc", "Clean Architecture", "Firebase", "Music App"],
    github: "",
    webapp: "",
  },
];
