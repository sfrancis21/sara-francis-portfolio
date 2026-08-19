// Single Page for organizing all data and components for projects

export type Profile = {
  name: string;
  // About Me section.
  about: string;
  github: string;
  linkedin: string;
  // Contact email address (without the "mailto:" prefix).
  email: string;
  // Path to resume PDF in /public
  resume: string;
};

export type Project = {
  name: string;
  // GitHub URL. Leave empty ("") or omit to hide the link for this project.
  github?: string;
  // Optional second repo, e.g. the backend when `github` is the frontend.
  // When set, the two links are labeled "Frontend" and "Backend".
  github2?: string;
  // Optional live/deployed site link.
  demo?: string;
  description: string;
  // Tech stack tags shown as small pills, e.g. ["React", "Node.js"].
  tech?: string[];

  // YouTube or Vimeo link to a demo video (e.g. a youtu.be/... or vimeo.com/... URL).
  // Leave empty ("") or omit to hide the video for this project.
  video?: string;
};

export const profile: Profile = {
  name: "Sara Francis",
  about:
    "Hello, I'm Sara Francis, a full-stack software engineer and CS graduate student at Northeastern, with a strong interest in game development. I've built everything from a Goodreads remake in the MERN stack to a custom ECS-based game engine in C++, and an Android habit tracker where you hatch creatures to stay motivated. I'm currently looking for full-stack or software engineering roles in the Boston area.",
  github: "https://github.com/sfrancis21",
  linkedin: "https://www.linkedin.com/in/sara-francis-916680262/",
  email: "sarafrancis1@me.com",
  resume: "/Resume.pdf",
};

export const projects: Project[] = [
  {
    name: "Published iOS Habit Tracking App",
    github: "",
    demo: "https://apps.apple.com/us/app/hatchbit-habit-tracker/id6801626466",
    description:"Hatchbit is a habit-tracking app that motivates users by having them hatch and collect pixel-art creatures. Originally built for Android using Kotlin and Firebase, it's now live on the App Store as a cross-platform React Native app. Built with one other student, Saurabh Mishra, who also created the demo video below. The repository is private. The app store page for Hatchbit can be found here: ",
    video: "https://youtube.com/shorts/YziY8USDPCY?feature=share",
    tech: ["Kotlin", "Firebase", "Android", "React Native", "TypeScript"],

  },
  {
    name: "Goodreads Website Recreation",
    github: "https://github.com/vitakh/goodreads-web-app",
    github2: "https://github.com/vitakh/goodreads-node-server-app",
    demo: "https://goodreads-web-app.vercel.app",
    description:
      "A recreation of Goodreads.com built with two other developers. This full-stack web app uses React, Node.js/Express, and MongoDB, with the frontend deployed on Vercel and the backend on Render. Users can search books, add reviews, and save them to different shelves, while authors can claim ownership of books to link them to their account. It also includes an admin profile for removing users, monitoring reviews, and approving author requests. The live deployment can be accessed here: ",
    video: "https://youtu.be/BbbjcS837EE",
    tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "JavaScript"],

  },
  {
    name: "Custom C++ Pac-Man Game",
    github: "https://github.com/sfrancis21/Pacman-Game",
    description: "A custom-built, ECS-based game engine in C++, used to create a Pac-Man remake. It features levels of increasing difficulty, AI enemy movement, a menu system, and a functioning sprite/animation system.",
    video: "https://youtu.be/Tmd_gV-3ejY",
    tech: ["C++", "ECS"],

  },
  {
    name: "Google Calendar Recreation",
    github: "https://github.com/sfrancis21/GoogleCalendarProject",
    description:
      "A recreation of Google Calendar built with Java and Java Swing as part of a team project, featuring multiple calendars, event creation and management, and recurring event series with full editing functionality.",
    video: "https://youtu.be/1GB8PHHSRjE",
    tech: ["Java", "Java Swing"],

  },
  {
    name: "Unreal 2D Pixel Shooter (In Progress)",
    github:"",
    description:
      "A 2D top-down pixel-art shooter built in Unreal Engine as a personal project. Features include character movement, an inventory and item system, AI enemies driven by behavior trees, and tile-map level design. Built using Unreal Blueprints as a way to explore game development outside of coursework.",
    video: "https://youtu.be/ldjUQz__SUQ",
    tech: ["Unreal Engine", "Blueprints", "C++"],

  },
];
