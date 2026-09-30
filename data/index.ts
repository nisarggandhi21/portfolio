export type ExperienceProject = {
  name: string;
  stack: string[];
  // Wrap numbers in **double asterisks** to highlight them
  points: string[];
};

export type Experience = {
  id: number;
  company: string;
  // Optional logo in public/logos; a letter badge is shown without one
  logo?: string;
  role: string;
  note?: string;
  // "YYYY-MM"; leave `end` out for a current role
  start: string;
  end?: string;
  location: string;
  projects: ExperienceProject[];
};

export const workExperience: Experience[] = [
  {
    id: 4,
    company: "Sugar Cosmetics",
    logo: "/logos/sugar-cosmetics.png",
    role: "Full Stack Developer",
    start: "2026-06",
    location: "Mumbai, India",
    projects: [
      {
        name: "AI & Customer Features",
        stack: ["React.js", "RAG", "LangChain", "LLM APIs"],
        points: [
          "Engineered a virtual try-on feature with React.js and a face tracking library, letting shoppers upload a selfie and preview Sugar cosmetics products live on their face with real-time overlays and product recommendations.",
          "Built an AI chat assistant using RAG (Retrieval-Augmented Generation) and LangChain, integrating **3 internal data sources** to answer product and support queries.",
        ],
      },
      {
        name: "Internal Dashboard Redesign",
        stack: ["React.js", "GitHub Spec Kit"],
        points: [
          "Redesigned the entire internal dashboard UI using GitHub Spec Kit (spec-driven development), aligning design and implementation through structured specs.",
          "Introduced a unified theme system and reusable shared components, improving page load time by **30%**.",
        ],
      },
      {
        name: "Backend & Cloud Optimization",
        stack: ["Python", "Docker", "Redis", "AWS Lambda", "EC2"],
        points: [
          "Created backend microservices in Python and containerized them with Docker, decoupling business logic from the core platform to improve scalability and maintainability.",
          "Introduced Redis caching in an internal warehouse and stock management dashboard used by the operations team, reducing redundant API calls and improving data load time by **20%** for real-time inventory tracking.",
          "Migrated **5 services** from EC2 to AWS Lambda and optimized instance types, reducing monthly infrastructure costs and eliminating idle compute overhead.",
        ],
      },
    ],
  },
  {
    id: 1,
    company: "Withum",
    logo: "/logos/withum.svg",
    role: "Consultant",
    note: "Promoted from Analyst",
    start: "2024-07",
    end: "2026-06",
    location: "Bengaluru, India",
    projects: [
      {
        name: "Analytics Dashboard",
        stack: ["React.js", "Next.js", "Node.js", "GraphQL"],
        points: [
          "Architected a React analytics dashboard for US tax auditing workflows, improving data rendering efficiency and reducing code duplication by **30%**.",
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
          "Developed a Java microservice to handle asynchronous report generation, decoupling it from the core platform and improving overall system scalability.",
          "Refined database queries and indexing strategies, cutting execution time by **40%** and lowering load by **25%**.",
        ],
      },
      {
        name: "CI/CD, Testing & Monitoring",
        stack: ["GitHub Actions", "Cypress", "Slack API"],
        points: [
          "Deployed applications to AWS through GitHub Actions CI/CD pipelines and built Slack alerts for pipeline status, eliminating manual monitoring and reducing release downtime by **~50%**.",
          "Wrote Cypress end-to-end tests for critical user flows, catching **30+ bugs** in early regression testing before release.",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Walnut Folks",
    logo: "/logos/walnut-folks.png",
    role: "Web Development Trainee",
    start: "2024-02",
    end: "2024-05",
    location: "Bengaluru, India",
    projects: [
      {
        name: "Transportation Business Platform",
        stack: ["React.js", "Node.js"],
        points: [
          "Built a full-stack website for a client in the transportation business using React.js and Node.js, optimizing frontend rendering and API performance.",
        ],
      },
      {
        name: "Walnut Folks Landing Page",
        stack: ["WordPress", "SEO"],
        points: [
          "Developed the company's landing page on WordPress, raising its Google PageSpeed score from **70 to 90** and improving SEO for better search visibility.",
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Digitopia",
    role: "Web Development Intern",
    start: "2022-02",
    end: "2022-04",
    location: "Remote",
    projects: [
      {
        name: "Client Website Development",
        stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        points: [
          "Executed end-to-end development of a client website with **100% ownership**, covering design, responsiveness, and deployment.",
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
      "Python",
      "Java",
      "REST APIs",
      "GraphQL",
      "Apollo Server",
      "JWT",
      "OAuth2",
      "Socket.io",
      "Microservices Architecture",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "AWS (ECS, EC2, Lambda, S3, ALB, Auto Scaling)",
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
    title: "Applied AI",
    skills: [
      "LLM API Integration",
      "RAG Pipelines",
      "LangChain",
      "Prompt Engineering",
      "Claude Code (Spec-Driven Development)",
      "AI Feature Development",
    ],
  },
];

export const profile = {
  name: "Nisarg Gandhi",
  location: "Mumbai, India",
  // Set to e.g. "Open to new roles" to show an availability note in the hero
  availability: "",
  email: "nisarggandhi21@gmail.com",
  // Shown as the quote in the homepage experience card
  highlight:
    "Built an AI chat assistant with RAG and LangChain that answers product and support queries from 3 internal data sources.",
  wakatimeProfile: "https://wakatime.com/@nisarggandhi21",
  links: [
    { label: "GitHub", href: "https://github.com/nisarggandhi21" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nisarggandhi21/" },
    { label: "X", href: "https://x.com/nisarggandhi21" },
  ],
};

export const personalProjects = [
  {
    name: "Taste of Home",
    href: "https://taste-of-home.nisarg-gandhi.com/",
    github: "https://github.com/nisarggandhi21/Taste-of-Home",
    period: "Dec 2023 – Apr 2024",
    stack: ["MERN Stack", "Socket.io", "Stripe", "JWT"],
    description:
      "A hyperlocal food marketplace for home-based food producers, filling a gap left by Swiggy/Zomato's GST mandate. Built on the MERN stack with 7 core features: seller onboarding, product listings, real-time chat (Socket.io), Stripe payments, JWT auth, cart management, and an admin dashboard with RBAC.",
  },
];

export const awards = [
  {
    title: "Gotcha Award (3×)",
    detail:
      "Received from a Withum Partner for consistent performance and delivery.",
  },
  {
    title: "22+ Withum Bucks",
    detail: "Earned at Withum for consistent performance and delivery.",
  },
];

export const education = [
  {
    school: "PES University",
    logo: "/logos/pes-university.png",
    degree: "Master of Computer Applications (MCA)",
    shortDegree: "MCA",
    location: "Bengaluru",
    period: "Oct 2022 – Jun 2024",
  },
  {
    school: "S K Somaiya Degree College",
    logo: "/logos/sk-somaiya.svg",
    degree: "BSc Computer Science",
    shortDegree: "BSc CS",
    location: "Mumbai",
    period: "Jun 2019 – Mar 2022",
  },
];
