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
        "An end-to-end systematic trading platform that carries a strategy from research hypothesis all the way to live execution. The same code that validates a strategy in backtesting is the code that trades it live, so what gets tested is exactly what runs.",
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
      company: "Studio RS S.r.l. \u00b7 Pisa, Italy",
      title: "Software Engineer",
      dateRange: "May 2026 - Present",
      bullets: [
        "Retail and grocery technology, within the Distribution Service group: the parent company covers hardware, Studio RS covers software.",
        "Develop and maintain the applications running in supermarket environments: point-of-sale, back-office, and store management systems used daily across retail chains.",
        "Work on production systems where downtime means checkout lines stop, so reliability and backwards compatibility matter more than novelty.",
      ],
    },
    {
      company: "Independent \u00b7 Remote",
      title: "Freelance Software Engineer",
      dateRange: "Aug 2023 - Apr 2026",
      bullets: [
        "Delivered projects for clients across Italy, from greenfield builds to maintaining and extending existing codebases.",
        "Built full-stack accounting platforms and integrated data-driven systems.",
      ],
    },
  ],
  education: [],
};
