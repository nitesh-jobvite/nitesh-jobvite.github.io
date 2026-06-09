// Single source of truth for all site content.
// Edit values here to update the site — no need to touch component markup.

export const profile = {
  name: "Nitesh Kumar",
  role: "Senior Software Engineer",
  headline:
    "Building scalable Rails platforms, search systems, and production-ready cloud solutions.",
  tagline:
    "Senior Software Engineer focused on backend performance, search infrastructure, and reliable cloud-native delivery.",
  summary:
    "Senior software engineer with 9+ years of experience shipping clean, efficient, and maintainable backend systems. I specialize in Ruby on Rails, search infrastructure (OpenSearch), and cloud-native deployments on AWS and Kubernetes. I care about the full development lifecycle — strong test coverage, observability, performance, and keeping production healthy.",
  // Phrases cycled by the hero typing effect.
  roles: ["Ruby on Rails", "OpenSearch", "Snowflake", "Kubernetes", "AWS"],
  location: "Zirakpur, Punjab, India",
  email: "me.nkj7@gmail.com",
  phone: "+91-9810354424",
  resumeUrl: `${import.meta.env.BASE_URL}Nitesh_Kumar_Resume.pdf`,
  social: {
    github: "https://github.com/nitesh-jobvite",
    linkedin: "https://www.linkedin.com/in/nitesh-kumar-192443b6/",
  },
};

// Achievement / stat cards. `icon` is resolved to a component in Achievements.jsx.
export const achievements = [
  {
    icon: "spark",
    value: "5+ Years",
    title: "Engineering experience",
    desc: "Shipping and maintaining production Ruby on Rails systems at scale.",
  },
  {
    icon: "search",
    value: "Search",
    title: "Platform modernization",
    desc: "Led the move from Solr/Google Search to OpenSearch with better relevance.",
  },
  {
    icon: "cloud",
    value: "Cloud",
    title: "Kubernetes deployments",
    desc: "Containerized services on AWS, orchestrated with Kubernetes & Helm.",
  },
  {
    icon: "support",
    value: "SRE",
    title: "Production & on-call support",
    desc: "Owned releases and stability with New Relic observability and monitoring.",
  },
];

// Grouped skill set, derived from the resume and current focus areas.
export const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: ["Ruby on Rails", "Ruby", "JavaScript", "ReactJS", "SQL", "HTML", "CSS"],
  },
  {
    title: "Search & Data",
    skills: ["OpenSearch", "Snowflake", "Kafka", "ActiveRecord", "Vertica"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Kubernetes", "Helm", "Docker", "Microservices", "Linux", "Git"],
  },
  {
    title: "Practices",
    skills: [
      "RSpec / Testing",
      "Background Jobs (Sidekiq)",
      "Performance Optimization",
      "New Relic / Observability",
      "SRE / On-call",
      "Production Support",
    ],
  },
];

// Work history — newest first. Bullets are tightened for readability.
export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Employ Inc.",
    period: "Oct 2023 — Present",
    location: "Remote",
    current: true,
    points: [
      "Led Ruby upgrades across multiple Rails applications (2.7 → 3.2) while protecting and growing test coverage.",
      "Built custom internal gems to interface with Snowflake via APIs, powering dynamic dashboards and reports.",
      "Engineered a dedicated OpenSearch microservice to improve search functionality and query performance.",
      "Containerized services with Docker and orchestrated deployments on Kubernetes using Helm.",
      "Established monitoring with New Relic and drove production stability through proactive bug fixes.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Aloha Engineering (Client: Reach24)",
    period: "Mar 2022 — Sep 2023",
    location: "Remote",
    points: [
      "Designed and built robust Ruby on Rails APIs powering frontend features end to end.",
      "Wrote comprehensive RSpec unit tests covering core scenarios and edge cases.",
      "Drove code reviews to uphold best practices and codebase quality.",
      "Replaced Filestack with an in-house file-upload feature, eliminating recurring third-party costs.",
    ],
  },
  {
    role: "Ruby on Rails Developer",
    company: "Ayam (Freelance)",
    period: "Jun 2021 — Dec 2021",
    location: "Remote",
    points: [
      "Built backend for a meditation & well-being app using Devise, Paperclip, and Sidekiq.",
      "Developed and integrated APIs for Android and iOS clients.",
      "Implemented push notifications via FCM and OneSignal.",
      "Deployed and scaled Rails apps on Heroku.",
    ],
  },
  {
    role: "Ruby on Rails Developer",
    company: "Relyon Softech Pvt Ltd",
    period: "Mar 2020 — Mar 2022",
    location: "India",
    points: [
      "Built features for a payroll/taxation platform serving 60,000+ users across India.",
      "Integrated biometric attendance APIs to automate employee tracking.",
      "Implemented XML voucher reporting using Nokogiri and background jobs via Delayed Job.",
      "Served as primary production bug fixer within an Agile Scrum workflow.",
    ],
  },
  {
    role: "Software Development Engineer I",
    company: "Nestaway Technologies Pvt Ltd",
    period: "Apr 2019 — Feb 2020",
    location: "India",
    points: [
      "Developed features for an online home-rental platform from requirements to delivery.",
      "Mentored support engineers and conducted code reviews.",
      "Partnered with QA to write comprehensive test cases.",
    ],
  },
  {
    role: "Technical Support Engineer I → II",
    company: "Nestaway Technologies Pvt Ltd",
    period: "Apr 2016 — Mar 2019",
    location: "India",
    points: [
      "Wrote Ruby scripts to automate tasks and repair bug-impacted data.",
      "Documented recurring issues and authored FAQs.",
      "Handled production emergencies during support operations.",
    ],
  },
];

// Featured projects — structured as Problem / Solution / Impact + tech stack.
export const projects = [
  {
    title: "Vertica → Snowflake Migration",
    problem:
      "Analytics ran on Vertica, which was costly to scale and awkward to integrate with newer reporting needs.",
    solution:
      "Migrated analytical workloads to Snowflake and built custom Ruby gems to query it over APIs, feeding dashboards and reports.",
    impact:
      "Faster, more scalable analytics with reusable internal libraries adopted across teams.",
    tags: ["Snowflake", "Ruby", "Data Migration", "APIs"],
  },
  {
    title: "Solr/Google → OpenSearch Migration",
    problem:
      "Search relied on legacy Solr/Google Search with limited relevance tuning and little operational control.",
    solution:
      "Re-platformed search onto OpenSearch, redesigning the indexing pipeline and query strategies.",
    impact:
      "Improved relevance and performance, plus full control over the search stack.",
    tags: ["OpenSearch", "Search", "Migration", "Relevance"],
  },
  {
    title: "OpenSearch-Powered Job Search API",
    problem:
      "The product needed fast, scalable job search that legacy search couldn't deliver.",
    solution:
      "Built a dedicated microservice exposing an OpenSearch-backed job-search API with tuned queries and indexing.",
    impact:
      "Low-latency, scalable search powering core product discovery features.",
    tags: ["OpenSearch", "Microservices", "Rails", "Performance"],
  },
  {
    title: "Dependabot & Security Upgrades",
    problem:
      "Rails apps had accumulated dependency and security debt with open CVEs.",
    solution:
      "Triaged Dependabot alerts, proved real exploitability, and applied minimal, validated fixes.",
    impact:
      "Reduced security exposure across applications without destabilizing production.",
    tags: ["Security", "Ruby on Rails", "CVE Remediation"],
  },
  {
    title: "Kubernetes / Helm Deployment Work",
    problem:
      "Services needed repeatable, reliable deployment and orchestration across environments.",
    solution:
      "Containerized services with Docker and orchestrated them on Kubernetes using Helm charts.",
    impact:
      "Consistent, repeatable deployments with easier scaling and rollbacks.",
    tags: ["Kubernetes", "Helm", "Docker", "AWS"],
  },
  {
    title: "Rails Production Deployment & Release Support",
    problem:
      "Releases needed careful coordination and fast incident response in production.",
    solution:
      "Owned Rails release/deploy support with New Relic observability and proactive monitoring.",
    impact:
      "Stable production with quick detection and resolution of issues.",
    tags: ["SRE", "New Relic", "On-call", "Release"],
  },
];
