import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Soar,
  brandshops,
  shopify,
  carrent,
  jobit,
  todo,
  movie,
  calculator,
  talkgpt,
  threads,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ios Developer",
    icon: mobile,
  },
  {
    title: "Andriod Developer",
    icon: backend,
  },
  {
    title: "C++ Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Soar Robotics",
    icon: Soar,
    iconBg: "#383E56",
    date: "March 2023 - Current",
    points: [
      "Designed and developed a ZMQ-based pub-sub system using Boost C++ libraries, creating use cases like Road Hazard Warning, Assisted Overtaking Maneuver, and a communication system with Vanetza.",
      "Automated geo-simulation with launch scripts.",
      "Implemented Level 2 autonomy with V2X.",
      "Created UI for iOS, Android, and React for a car infotainment system that connects with company hardware through a hotspot.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Brandshops",
    icon: brandshops,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed React applications using Redux state management and RESTful APIs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Created custom components, forms, and interfaces for user interactions in React.",
      "Debugged and resolved issues related to React components.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "MadoverBiking",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed and deployed React and Redux-based web applications, optimized performance of front-end code, and designed intuitive user interfaces",
      "Improved front-end performance by 200%, adopted proper code organization techniques, and implemented an automated continuous deployment system",
    ],
  },
];

const testimonials = [
  {
    
  },
];

const projects = [
  {
    name: "Todo App",
    description:
      "Web-based platform that allow you to create separate folders for different types of tasks make sure that your tasks are written down all in one place so you don't forget anything",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Liven11/Todo-app.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Liven11/Jobseek_reactjs.git",
  },
  {
    name: "Movie App",
    description:
      "online platforms that allow users to stream, download, and interact with a wide array of movies directly from the internet allow you to watch movies and TV shows online.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Liven11/Movie_reactjs.git",
  },
  {
    name: "Calculator ReactNative",
    description:
      "A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division calculations.",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "DB",
        color: "green-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/Liven11/Calculator_ReactNative.git",
  },
  {
    name: "Threads Clone App",
    description:
      "Threads is an app from Instagram where you can view and share public conversation on how you use Threads, you can also post threads, and follow profiles you're interested in.",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "Swift",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "red-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/Liven11/React-Native-Threads-Clone.git",
  },
  {
    name: "Talk gpt App",
    description:
      "TalkGPT allows you to easily interact with ChatGPT, the state-of-the-art language model developed by OpenAI. With TalkGPT, you can talk to ChatGPT naturally, with your voice",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "objective C",
        color: "green-text-gradient",
      },
      {
        name: "kotlin",
        color: "red-text-gradient",
      },
    ],
    image: talkgpt,
    source_code_link: "https://github.com/Liven11/TalkGpt.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
