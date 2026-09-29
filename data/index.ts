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
        name: "Virtual Try-On",
        stack: [],
        points: [
          "Engineered a virtual try-on feature enabling users to upload a selfie and preview Sugar cosmetics products live on their face, generating realistic product recommendations and real-time visual overlays.",
        ],
      },
      {
        name: "AI Chat Assistant",
        stack: ["RAG", "LangChain"],
        points: [
          "Built an AI-powered chat assistant using RAG (Retrieval-Augmented Generation) and LangChain, integrating **3 internal data sources** to answer product and support queries.",
        ],
      },
      {
        name: "Storefront Performance",
        stack: ["Next.js"],
        points: [
          "Optimized the Next.js storefront with image optimization, code splitting and ISR, raising the Lighthouse performance score from **62 to 90+** and cutting LCP by **40%**.",
        ],
      },
      {
        name: "Cart & Checkout",
        stack: ["React"],
        points: [
          "Revamped the cart and checkout flow in React with optimistic updates and address auto-fill, reducing checkout drop-off by **15%**.",
        ],
      },
      {
        name: "Inventory Dashboard",
        stack: ["Redis"],
        points: [
          "Introduced Redis caching in an internal warehouse and stock management dashboard used by the operations team, reducing redundant API calls and improving data load performance for real-time inventory tracking.",
        ],
      },
      {
        name: "Infrastructure",
        stack: ["AWS Lambda", "EC2"],
        points: [
          "Migrated **5 services** from EC2 to AWS Lambda and right-sized instance types, reducing monthly infrastructure costs and eliminating idle compute overhead.",
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
        stack: ["Node.js", "Java", "PostgreSQL", "MongoDB"],
        points: [
          "Developed a Java-based microservice to handle asynchronous report generation, decoupling it from the core platform and improving overall system scalability.",
          "Designed backend APIs powering **5+ production features**, increasing data delivery efficiency and reducing response latency by **20%**.",
          "Refined database queries and indexing strategies, cutting execution time by **40%** and lowering load by **25%**.",
        ],
      },
      {
        name: "CI/CD Monitoring Integration",
        stack: ["GitHub Actions", "Slack API"],
        points: [
          "Developed a Slack-based notification system for CI/CD pipelines, eliminating manual monitoring effort and improving alert visibility.",
          "Deployed applications via CI/CD pipelines in an AWS environment, improving system reliability and reducing downtime during releases by **~50%**.",
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
    start: "2022-02",
    end: "2022-04",
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
      "AI-powered Feature Development",
    ],
  },
];

export const profile = {
  name: "Nisarg Gandhi",
  title: "Full Stack Developer",
  location: "Mumbai, India",
  // Set to e.g. "Open to new roles" to show an availability note in the hero
  availability: "",
  email: "nisarggandhi21@gmail.com",
  summary:
    "Full Stack Developer with 2.7 years of experience architecting scalable web applications using React.js, Next.js, and Node.js, currently building LLM-powered features (RAG, LangChain) in production. Promoted within 12 months at Withum for delivering high-impact solutions across frontend, backend, and DevOps for US tax auditing workflows.",
  // Shown as the quote in the homepage experience card
  highlight: "Promoted from Analyst to Consultant at Withum within 12 months.",
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
    period: "Dec 2023 – Present",
    stack: ["MERN Stack", "Socket.io", "Stripe", "JWT"],
    description:
      "A hyperlocal food marketplace for home-based food producers, bridging a gap left by Swiggy/Zomato's GST mandate. Built on the MERN stack with 7 core features: seller onboarding, product listings, real-time chat (Socket.io), Stripe payments, JWT auth, cart management, and an admin dashboard with RBAC.",
  },
];

export const awards = [
  {
    title: "Gotcha Award (3×)",
    detail:
      "Received from a Withum Partner for consistent, high-impact performance.",
  },
  {
    title: "22+ Withum Bucks",
    detail: "Earned at Withum for consistent, high-impact performance.",
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
