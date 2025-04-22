import { ClockArrowUp, Code, Cpu } from "lucide-react";

const SKILLS = [
  { text: "Responsive Design", category: "Design" },
  { text: "Frontend Development", category: "Code" },
  { text: "Backend Solutions", category: "Architecture" },
  { text: "UI/UX Excellence", category: "Design" },
  { text: "JavaScript Mastery", category: "Code" },
];

const ICONSTACKS = [
    "/icons/icons8-html-100.png",
  "/icons/icons8-json-100.png",
  "/icons/icons8-react-160.png",
  "/icons/icons8-css-128.png",
];

const METRICS = [
    {
      id: 1,
      value: "15+",
      label: "Coding Projects",
      icon: Code,
      color: "amber",
      className: "text-amber-300",
      gradient: "from-amber-500/30 to-amber-600/10"
    },
    {
      id: 2,
      value: "8+",
      label: "Tech Stacks Used", 
      icon: Cpu,
      color: "blue",
      className: "text-blue-300",
      gradient: "from-blue-500/30 to-blue-600/10"
    },
    {
      id: 3,
      value: "300+",
      label: "Coding Hours",
      icon: ClockArrowUp,
      color: "purple",
      className: "text-purple-300", 
      gradient: "from-purple-500/30 to-purple-600/10"
    }
  ];

export { SKILLS, ICONSTACKS,METRICS };
