import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
  } from "../assets";
  import quizbuddy from "../assets/quizbuddy.png";
  import resumebuilder from "../assets/resumebuilder.png";
  import todolist from "../assets/todolist.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Project Management and Consultation",
      icon: creator,
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
  ];
  
  
  
  const projects = [
    {
      name: "Quiz Buddy",
      description:
        "Web-based platform that allows users to create multiple number of MCQs, view, and play the quizzes. User will get the proper user experience of playing the quiz with our sound effects. It is Responsive also so the project will run smoothly on any device screen sizes",

      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material UI",
          color: "green-text-gradient",
        },
        {
          name: "react-redux",
          color: "pink-text-gradient",
        },
      ],
      image: quizbuddy,
      source_code_link: "https://github.com/SarangTech09/Quiz_Buddy",
      live_link: "https://sarangtech09.github.io/Quiz_Buddy/",
    },
    {
      name: "Resume Builder",
      description:
        "Web application that enables users to create professional resumes effortlessly. With a variety of available templates to choose from, users can customize their resumes according to their needs. They can also view their saved resumes and download them as PDFs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material UI",
          color: "green-text-gradient",
        },
        {
          name: "react-redux",
          color: "pink-text-gradient",
        },
      ],
      image: resumebuilder,
      source_code_link: "https://github.com/SarangTech09/Resume_builder",
      live_link: "https://sarangtech09.github.io/Resume_builder/",
    },
    {
      name: "Simple TO-DO-List",
      description:
        "A Simple To-Do List Web Application that allows users to create, edit, and delete tasks. Users can create multiple tasks. It is Responsive also so the project will run smoothly on any device screen sizes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-hooks",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/SarangTech09/Simple_to-do-list",
      live_link: "https://sarangtech09.github.io/Simple_to-do-list/",
    },
  ];
  
  export { services, technologies, projects };
  