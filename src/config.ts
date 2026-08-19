export const siteConfig = {
  name: "Mikhail Lai",
  title: "Software Engineer",
  description: "Personal site and portfolio of Mikhail Lai",
  accentColor: "#0d9488",
  social: {
    email: "mikhail@laimk.dev",
    linkedin: "https://www.linkedin.com/in/mikhail-lai-138ba3411/",
    github: "https://github.com/madebymlai",
  },
  aboutMe:
    "I work on systems that have to keep running. Most of what I build ends up in production and stays there: APIs, integrations, backend architecture, and the frontend that makes it usable.\n\nI care about code that's right rather than clever.\n\nOpen to full-time positions and freelance work.",
  skills: [
    "Java",
    "Spring Boot",
    "Python",
    "SQL",
    "REST APIs",
    "Git",
    "Docker",
    "React",
  ],
  projects: [
    {
      name: "Aegis",
      description:
        "An end-to-end systematic trading platform: one pipeline from research hypothesis to live execution, built as a monorepo of bounded contexts. Research scores and promotes a strategy as an immutable Lock, and execution trades exactly that Lock \u2014 the same component code running on both sides of the boundary, with every run writing a manifest of config, environment, and artifact hashes for reproducibility.",
      link: "https://github.com/madebymlai/aegis",
      skills: [
        "Python",
        "Domain-Driven Design",
        "Hexagonal Architecture",
        "Reproducible Pipelines",
        "Financial Data Engineering",
        "Systematic Trading",
      ],
    },
  ],
  experience: [
    {
      company: "TODO: Company",
      title: "TODO: Role",
      dateRange: "2024 - Present",
      bullets: [
        "What you built or owned",
        "A result with a number in it if you have one",
      ],
    },
  ],
  education: [],
};
