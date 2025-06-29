import { Code, Database, Globe, Server, Smartphone, Zap } from "lucide-react";
import {
  FaAndroid,
  FaAngular,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaLaravel,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFlask,
  SiGithubactions,
  SiNextdotjs,
  SiSpring,
  SiSvelte,
} from "react-icons/si";

export const about = `
  I’m a Full Stack Developer with over 13 years of experience
  designing, developing, and maintaining web and mobile
  applications. My background spans frontend frameworks like
  React, Angular, Next.js, and Svelte, as well as backend
  technologies including Express.js, Laravel, Flask, and Spring.
`;

export const techStack = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Angular", icon: FaAngular },
  { name: "Svelte", icon: SiSvelte },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Laravel", icon: FaLaravel },
  { name: "PHP", icon: FaPhp },
  { name: "Python", icon: FaPython },
  { name: "Flask", icon: SiFlask },
  { name: "Java", icon: FaJava },
  { name: "Spring", icon: SiSpring },
  { name: "Android", icon: FaAndroid },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "SQL Databases", icon: FaDatabase },
  { name: "Linux", icon: FaLinux },
];
export const projects = [
  {
    title: "DigAI",
    description:
      "Modular conversational recommendation system for fashion e-commerce",
    url: "https://github.com/arbezerra/digai",
  },
  {
    title: "ffwatch",
    description: "A tool for watching a directory for changes and run ffmpeg",
    url: "https://github.com/arbezerra/ffwatch",
  },
  {
    title: "arbezerra (this website)",
    description: "My personal website and portfolio",
    url: "https://github.com/arbezerra/arbezerra",
  },
  {
    title: "Movie Recommender",
    description: "A proof of concept movie recommendation system",
    url: "https://github.com/arbezerra/movie-recomm",
  },
  {
    title: "Insomnia (Contributor)",
    description: "The open-source, cross-platform API client for GraphQL, REST, WebSockets, SSE and gRPC. With Cloud, Local and Git storage.",
    url: "https://github.com/Kong/insomnia",
  },
  {
    title: "Knex (Contributor)",
    description: "A query builder for PostgreSQL, MySQL, CockroachDB, SQL Server, SQLite3 and Oracle, designed to be flexible, portable, and fun to use.",
    url: "https://github.com/knex/knex",
  },
  {
    title: "Firefly-III import configurations (Contributor)",
    description: "Import configurations for Firefly III",
    url: "https://github.com/firefly-iii/import-configurations",
  },
  {
    title: "ts-express-boilerplate",
    description: "A boilerplate project for building Rest Api.",
    url: "https://github.com/arbezerra/ts-express-boilerplate",
  },
  {
    title: "ansible-kubernetes",
    description: "Deploy a Production Kubernetes Cluster with Ansible.",
    url: "https://github.com/arbezerra/ansible-kubernetes",
  },
];
export const experiences = [
  {
    company: "Paneas",
    period: "Jan 2024 - Present",
    positions: [
      {
        title: "Technical Lead",
        period: "Mar 2025 - Present",
        description:
          "As a Tech Lead, I guide the technical direction of the team, ensuring architectural consistency, code quality, and alignment with business objectives. I facilitate technical discussions, mentor developers, and help define best practices to improve our delivery processes. I work closely with product managers and other stakeholders to translate requirements into scalable solutions, while fostering a collaborative and high-performance team environment.",
        technologies: [
          "Technical Project Leadership",
          "System Architecture",
          "Python",
          "Angular",
        ],
      },
      {
        title: "Senior Full Stack Developer",
        period: "Jan 2024 - Mar 2025",
        description:
          "Worked with FastAPI (Python) on the backend and Angular on the frontend to deliver robust and modern application features. A key achievement in this role was integrating an AI-powered chatbot, enhancing the overall user experience. During this period, I also stepped into the role of tech lead for my squad, taking responsibility for technical decisions, stakeholder alignment, and supporting the team in building scalable, high-quality solutions.",
        technologies: ["Angular", "Python", "Docker"],
      },
    ],
  },
  {
    company: "Freelance",
    period: "Jan 2011 - Jan 2024",
    positions: [
      {
        title: "Full Cycle Developer",
        period: "Jan 2022 - Jan 2024",
        description:
          "Focused on scalable web solutions using SvelteKit and Express.js, and improved development workflows with GitHub Actions and automation tools.",
        technologies: ["SvelteKit", "Express.js", "GitHub Actions"],
      },
      {
        title: "Full Stack Developer",
        period: "Jan 2019 - Dec 2021",
        description:
          "Expanded into Angular, Lumen, and Flarum plugin development, combining modern frontends with lightweight backends. Also gained experience with React Native and React for mobile and web apps.",
        technologies: ["Angular", "Lumen", "Flarum", "React Native", "React"],
      },
      {
        title: "Software & Data Developer",
        period: "Jan 2015 - Dec 2018",
        description:
          "Focused on projects involving jQuery, Python, and developed a Python library for parallel processing. Continued building Android apps and started working with Laravel for backend development.",
        technologies: ["jQuery", "Python", "Android", "Laravel"],
      },
      {
        title: "Web and Mobile Developer",
        period: "Jan 2011 - Dec 2014",
        description:
          "Worked on web and mobile projects using Android, jQuery, and PHP for a variety of clients. Also developed C++ applications for data processing.",
        technologies: ["Android", "jQuery", "PHP", "C++"],
      },
    ],
  },
];
