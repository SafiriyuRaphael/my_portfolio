import { Code, Globe, Palette, Zap } from "lucide-react";

const SKILLS = [
  { name: "Frontend Development", level: 95, color: "#FFD700" }, // Vibrant gold
  { name: "UI/UX Design", level: 90, color: "#CD853F" }, // Peru (warm brown)
  { name: "React Ecosystem", level: 92, color: "#DAA520" }, // Goldenrod
  { name: "JavaScript", level: 95, color: "#F0E68C" }, // Khaki (muted yellow)
  { name: "Responsive Design", level: 98, color: "#B8860B" }, // DarkGoldenrod
  { name: "Node.js", level: 85, color: "#778899" }, // LightSlateGray
];

const TECHNOLOGIES = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Typescript", icon: "/icons/typescript-icon.svg" },
  { name: "CSS3", icon: "/icons/css-3.svg" },
  { name: "Node.js", icon: "/icons/nodejs-icon-alt.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss-icon.svg" },
  { name: "Next.js", icon: "/icons/nextjs-icon.svg" },
  { name: "Git", icon: "/icons/github-icon.svg" },
];

const SERVICES = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive, visually stunning interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Building fast, responsive, and feature-rich websites and applications using modern technologies.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "SEO Optimization",
    description:
      "Enhancing your online visibility with search engine optimization strategies that drive organic traffic.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Tuning",
    description:
      "Optimizing application performance for lightning-fast load times and smooth user experiences.",
  },
];

const EXPERIENCETIMELINE = [
  {
    year: "2024 - Present",
    title: "Frontend Developer & Consultant",
    company: "Freelance / Remote",
    description:
      "Partnering with startups and small teams to craft intuitive UIs, optimize web performance, and ship clean, scalable code using React, Next.js, and Tailwind.",
  },
  {
    year: "2023 - 2024",
    title: "Frontend Engineer (Contract Role)",
    company: "Elsoft Technologies",
    description:
      "Collaborated with designers and backend engineers to deliver production-ready interfaces. Played a key role in building reusable component systems and improving app responsiveness across devices.",
  },
  {
    year: "2022 - 2023",
    title: "Web Developer & UI Enthusiast",
    company: "Independent Projects",
    description:
      "Led full-cycle web projects — from wireframes to deployment. Focused on UX detail, accessibility standards, and client satisfaction across diverse industries.",
  },
];

const TABVARIANTS = {
  active: {
    backgroundColor: "#14213d",
    color: "#ffffff",
    boxShadow: "0 4px 14px rgba(252, 163, 17, 0.3)",
    scale: 1.05,
  },
  inactive: {
    backgroundColor: "rgba(20, 33, 61, 0.7)",
    color: "#d1d5db",
    scale: 1,
  },
};

export { SKILLS, TECHNOLOGIES, SERVICES, EXPERIENCETIMELINE, TABVARIANTS };
