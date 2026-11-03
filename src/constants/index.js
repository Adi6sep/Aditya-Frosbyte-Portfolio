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
    springboot,
    git,
    figma,
    docker,
    Coursera,
    CADD,
    Codsoft,
    Letsgrowmore,
    carrent,
    jobit,
    doctorai,
    CivicForum,
    tripguide,
    RunwayOS,
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
      id: "education",
      title: "Education",
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
      title: "Apply UI/UX Designs",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "API Integration",
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
      name: "spring boot",
      icon: springboot,
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
      title: "Advanced Java",
      company_name: "COURSERA",
      icon: Coursera,
      iconBg: "#383E56",
      date: "Nov 2024 - Dec 2024",
      points: [
        "Connected backend applications to databases using JDBC for real-time data access..",
        "Built dynamic web applications using Servlets and JSP for real-time user interaction.",
        "Developed MVC-based Java applications with proper separation of concerns.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Database Handeling",
      company_name: "CADD",
      icon: CADD,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Feb 2025",
      points: [
        "Designed and managed relational databases using MySQL for structured data storage.",
        "Performed CRUD operations (Create, Read, Update, Delete) efficiently using SQL queries.",
        "Implemented foreign key constraints to maintain referential integrity between tables.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "App Development",
      company_name: "TECHNO JAM",
      icon: Letsgrowmore,
      iconBg: "#383E56",
      date: "March 2025 - April 2025",
      points: [
        "Developing and maintaining App applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Development",
      company_name: "CODSOFT",
      icon: Codsoft,
      iconBg: "#E6DEDD",
      date: "June 2025 - July 2025",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Bachelor of Technology in Computer Technology",
      name: "MIT ADT University",
      designation: "2023-2027",
      company: "Pursuing",
      image: "https://theknowledgereview.com/wp-content/uploads/2022/07/School-of-Engineering-Building.jpg",
    },
    {
      testimonial:
        "Higher Secondary Education - HSC Board",
      name: "Arham College",
      designation: "2020-2022",
      company: "Completed",
      image: "https://www.kidwise.in/wp-content/uploads/2021/01/download-17.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Adi6sep/roadking-rentals",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Doctor AI",
      description:
        "An AI-powered healthcare platform that provides diagnostic assistance and medical information to users.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: doctorai,
      source_code_link: "https://github.com/",
    },
        {
      name: "Civic Forum",
      description:
        "An AI-powered platform for civic engagement and community discussion.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: CivicForum,
      source_code_link: "https://github.com/",
    },
        {
      name: "Trip Guide",
      description:
        "An AI-powered travel planning platform that provides personalized recommendations and booking services for users.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  {
      name: "Runway OS",
      description:
        "An AI-powered travel planning platform that provides personalized recommendations and booking services for users.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: RunwayOS,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };