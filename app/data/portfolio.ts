// Single Page for organizing all data and components for projects

export type Profile = {
  name: string;
  // About Me section.
  about: string;
  github: string;
  linkedin: string;
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

  // YouTube or Vimeo link to a demo video (e.g. a youtu.be/... or vimeo.com/... URL).
  // Leave empty ("") or omit to hide the video for this project.
  video?: string;
};

export const profile: Profile = {
  name: "Sara Francis",
  about:
    "Hey, I'm Sara Francis, a full stack software engineer and CS grad student at Northeastern. I've built everything from a Goodreads remake in MERN to an Android habit tracker where you hatch creatures to stay motivated. I also dabble in game development on the side using C++ and Unreal. I'm currently looking for full stack or software engineering roles in the Boston area",
  github: "https://github.com/sfrancis21",
  linkedin: "https://www.linkedin.com/in/sara-francis-916680262/",
  resume: "/Resume.pdf",
};

export const projects: Project[] = [
  {
    name: "Habit Tracking Mobile App",
    github: "",
    description:
      "A Android mobile app designed using Kotlin and Firebase, Hatchbit is a habit tracking app that motivates users by hatching and collecting fun pixel art creatures. This was made with one other student, Saurabh Mishra, who also created the demo video below. We are currently working on migrating it to React Native in order to get it on the app store.",
    video: "https://youtu.be/Unj3meponUU",

  },
  {
    name: "Custom C++ Pac-Man Game",
    github: "",
    description:
      "A Java-based recreation of Google Calendar built with Java Swing as part of a team project, featuring multiple calendars, event creation and management, and recurring event series with full editing functionality.",
    video: "https://youtu.be/Tmd_gV-3ejY",

  },
  {
    name: "Google Calendar Recreation",
    github: "https://github.com/sfrancis21/GoogleCalendarProject",
    description:
      "A Java-based recreation of Google Calendar built with Java Swing as part of a team project, featuring multiple calendars, event creation and management, and recurring event series with full editing functionality.",
    video: "https://youtu.be/1GB8PHHSRjE",

  },
  {
    name: "Goodreads Website Recreation",
    github: "https://github.com/vitakh/goodreads-web-app",
    github2: "https://github.com/vitakh/goodreads-node-server-app",
    description:
      "A recreation of the Goodreads.com website built with a team of two other individuals. It was a full stack web app built with React, Node.js/Express, and MongoDB. Frontend deployed on Vercel, backend on Render. It allows users to search books, add reviews, and save them to different shelves. Authors can claim ownership of books to link them to their account. It also has a admin profile for removing users, monitoring reviews, and approving author requests. It's vercel deployment can be accessed here: https://goodreads-web-app.vercel.app?_vercel_share=z5DpOt5qrZgupT3TDBBb6c55HtZBXnt4",
    video: "https://youtu.be/BbbjcS837EE",

  },
  {
    name: "Unreal 2D Pixel Shooter (In Progress)",
    github:"",
    description:
      "A 2D top-down pixel art shooter built in Unreal Engine as a personal project. Features include character movement, an inventory and item system, AI enemies driven by behavior trees, and tile map level design. Built using Unreal Blueprints as a way to explore game development outside of coursework.",
    video: "https://youtu.be/ldjUQz__SUQ", 

  },
];
