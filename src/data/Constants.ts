import { LangKeyType, LangColorType, ProjectType } from "./Types";

const LANG_KEY: LangKeyType = {
  none: 0,
  js: 1,
  ts: 2,
  java: 3,
  dart: 4,
  cs: 5,
  python: 6,
};

const LANG_COLOR: LangColorType = {
  0: 0x000000,
  1: 0x7f7633,
  2: 0x1c4875,
  3: 0x313131,
  4: 0x003542,
  5: 0x2f0635,
  6: 0x19364e,
};

const PROJECTS: { [key: number]: ProjectType } = {
  1: {
    title: "Brower Startup",
    img: `${process.env.PUBLIC_URL}/img/browser_startup.png`,
    description: `Libraries and Frameworks: Pure JavaScript
          Personal Project - implementation of a web application (start-up page) that contains: Time, Weather, Inspirational quotes, Background Images and TODO list.`,
    url: "https://github.com/jmk-001/Browser-Startup",
  },
  2: {
    title: "Marauder's Map",
    img: `${process.env.PUBLIC_URL}/img/marauders_map.png`,
    description: `Libraries and Frameworks: React, Three.js, Tailwind CSS, Gsap, MongoDB, Django
          Project conducted in the University's project units.
          Implementation of a web application that renders an interactive 3D environment.
          Backend Testing - virtual coordinate generation (OpenCV) and calculation using vector Homography.`,
    url: "",
  },
  3: {
    title: "Designborne",
    img: `${process.env.PUBLIC_URL}/img/designborne.png`,
    description: `Libraries and Frameworks: Pure Java
          Applied OOP concepts (abstraction, encapsulation, inheritance, polymorphism) to enhance game features.
          Adopted design principles such as SOLID and DRY to ensure code modularity, maintainability, and extensibility.
          Utilized UML and sequence diagrams for comprehensive design documentation.`,
    url: "https://github.com/jmk-001/Designborne",
  },
  4: {
    title: "Medication Tracker",
    img: `${process.env.PUBLIC_URL}/img/medication_tracker.png`,
    description: `Libraries and Frameworks: Flutter
      A mobile application to manage personal medication intake.`,
    url: "https://github.com/jmk-001/Medication-Tracker",
  },
  5: {
    title: "The Table",
    img: `${process.env.PUBLIC_URL}/img/the_table.png`,
    description: `Libraries and Frameworks: Unity Game Engine
          Personal project - implementation of a 1:1 turn-based shooting game.
          Implementations using Remote Procedure Calls (RPC)
          Acquired understanding of how real-time RPC servers are implemented and how actions are synchronized across the users.`,
    url: "https://github.com/jmk-001/Unity/tree/main/Project%20Scripts/The%20Table",
  },
  6: {
    title: "Job Scraper",
    img: `${process.env.PUBLIC_URL}/img/job_scraper.png`,
    description: `Libraries and Frameworks:Html_session, Tkinter, Firebase Admin.
      Hackathon 2021 Project`,
    url: "https://github.com/jmk-001/Job-Scraper",
  },
};

export { LANG_KEY, LANG_COLOR, PROJECTS };
