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
    name: "Google Calendar Recreation",
    github: "https://github.com/sfrancis21/GoogleCalendarProject",
    description:
      "A Java-based recreation of Google Calendar built with Java Swing as part of a team project, featuring multiple calendars, event creation and management, and recurring event series with full editing functionality.",
    video: "", // paste the YouTube/Vimeo link after uploading the demo

  },
  {
    name: "Unreal 2D Pixel Shooter (In Progress)",
    github:"",
    description:
      "A 2D top-down pixel art shooter built in Unreal Engine as a personal project. Features include character movement, an inventory and item system, AI enemies driven by behavior trees, and tile map level design. Built using Unreal Blueprints as a way to explore game development outside of coursework.",
    video: "", // paste the YouTube/Vimeo link after uploading the demo

  },
];
