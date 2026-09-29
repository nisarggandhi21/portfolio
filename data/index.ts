export const gridItems = [
  {
    id: 1,
    title: "Socials",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "justify-start",
    titleClassName: "",
    img: "./bot.jpg",
    imgAlt: "Illustration of a robot coding at a computer",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Core Tools",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Coding Milestones: ",
    description: "((wakatime))",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Taste of Home",
    description: "Project in Motion",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/TOH.png",
    imgAlt: "Screenshot of the Taste of Home website",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Lets Connect",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

// Add your own projects here and re-enable <RecentProjects /> in app/page.tsx
export const projects: Project[] = [];

export type ExperienceProject = {
  name: string;
  stack: string[];
  // Wrap numbers in **double asterisks** to highlight them
  points: string[];
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  note?: string;
  period: string;
  location: string;
  projects: ExperienceProject[];
};

export const workExperience: Experience[] = [
  {
    id: 1,
    company: "Withum",
    role: "Consultant",
    note: "Promoted from Analyst",
    period: "Jul 2024 – Jun 2026",
    location: "Bengaluru, India",
    projects: [
      {
        name: "Analytics Dashboard",
        stack: ["React.js", "Next.js", "Node.js", "GraphQL"],
        points: [
          "Architected a React-based analytics dashboard for US tax auditing workflows, improving data rendering efficiency and reducing code duplication by **30%**.",
          "Implemented GraphQL APIs, decreasing payload size by **35%** and accelerating response time by **20%**.",
        ],
      },
      {
        name: "Auditing Platform",
        stack: ["Angular", "Python"],
        points: [
          "Revamped audit workflows using Angular UI and Python data pipelines, increasing processing throughput by **3x** and reducing manual effort by **40%**.",
          "Guided **2 junior developers**, accelerating onboarding and enhancing sprint delivery efficiency.",
        ],
      },
      {
        name: "API Services & Data Optimization",
        stack: ["Node.js", "PostgreSQL", "MongoDB"],
        points: [
          "Designed backend APIs powering **5+ production features**, increasing data delivery efficiency and reducing response latency by **20%**.",
          "Refined database queries and indexing strategies, cutting execution time by **40%** and lowering load by **25%**.",
        ],
      },
      {
        name: "CI/CD Monitoring Integration",
        stack: ["GitHub Actions", "Slack API"],
        points: [
          "Developed a Slack-based notification system for CI/CD pipelines, eliminating manual monitoring effort and improving alert visibility.",
          "Deployed applications via CI/CD pipelines in an AWS environment, improving system reliability and reducing downtime during releases by **50%**.",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Walnut Folks",
    role: "Web Development Trainee",
    period: "Feb 2024 – May 2024",
    location: "Bengaluru, India",
    projects: [
      {
        name: "Client Web Application",
        stack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB"],
        points: [
          "Delivered and deployed features across **2 full-stack web applications** using React.js, Next.js, and Node.js.",
          "Maintained **zero critical production bugs** across **3 deployments** while consistently delivering **2+ features per sprint**.",
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Digitopia",
    role: "Web Development Intern",
    period: "Feb 2022 – Apr 2022",
    location: "Remote",
    projects: [
      {
        name: "Client Website Development",
        stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        points: [
          "Executed end-to-end development of a client-facing website with **100% ownership**, covering design, responsiveness, and deployment.",
          "Engineered a fully responsive UI supporting **3+ device types**, ensuring consistent user experience across platforms.",
        ],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "JavaScript (ES6+)",
      "TypeScript",
      "React Hooks",
      "Redux",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Apollo Server",
      "JWT",
      "OAuth2",
      "Socket.io",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS (ECS, EC2, S3, Lambda, ALB, Auto Scaling)",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Vercel",
      "Linux",
    ],
  },
  {
    title: "Testing & Tools",
    skills: ["Jest", "Cypress", "Postman", "JMeter", "Git", "Agile/Scrum"],
  },
  {
    title: "AI & Integrations",
    skills: [
      "LLM API Integration",
      "Prompt Engineering",
      "AI-powered Feature Development",
      "Spec Driven Development",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/nisarggandhi21",
  },
  {
    id: 2,
    name: "X (Twitter)",
    img: "/twit.svg",
    link: "https://x.com/nisarggandhi21",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://linkedin.com/in/nisarggandhi21",
  },
];

// ---------------------------------------------------------------------------
// Resume-style homepage
// ---------------------------------------------------------------------------

export const profile = {
  name: "Nisarg Gandhi",
  title: "Full Stack Developer",
  location: "Mumbai, India",
  // Set to "" to hide the availability badge
  availability: "Open to new roles",
  email: "nisarggandhi21@gmail.com",
  summary:
    "Full Stack Developer with 2.7 years of experience building scalable web applications using React.js, Next.js, and Node.js. Promoted within 12 months at Withum for delivering high-impact solutions across frontend, backend, and DevOps, including US tax auditing workflows.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nisarggandhi21/" },
    { label: "GitHub", href: "https://github.com/nisarggandhi21" },
    { label: "X", href: "https://x.com/nisarggandhi21" },
  ],
};

export const personalProjects = [
  {
    name: "Taste of Home",
    href: "https://taste-of-home.nisarg-gandhi.com/",
    description:
      "A web app for discovering homemade food from local home cooks. Work in progress.",
  },
];

export const awards = [
  {
    title: "Gotcha Award (3×)",
    detail:
      "Recognized by Chan Patel (Partner, Withum) for outstanding performance and contributions.",
  },
  {
    title: "22+ Withum Bucks",
    detail: "Earned for consistent and innovative performance across projects.",
  },
];

export const education = [
  {
    school: "PES University",
    degree: "Master of Computer Applications (MCA)",
    location: "Bengaluru",
    period: "Oct 2022 – Jun 2024",
  },
];
