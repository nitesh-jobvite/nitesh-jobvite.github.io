// Single source of truth for all site content.
// Edit values here to update the site — no need to touch component markup.

export const profile = {
  name: "Nitesh Kumar",
  role: "Senior Software Engineer",
  tagline:
    "I build reliable, high-performance backend systems — Ruby on Rails, search platforms, and cloud-native infrastructure on AWS & Kubernetes.",
  summary:
    "Senior software engineer with 9+ years of experience shipping clean, efficient, and maintainable backend systems. I specialize in Ruby on Rails, search infrastructure (OpenSearch), and cloud-native deployments on AWS and Kubernetes. I care about the full development lifecycle — strong test coverage, observability, performance, and keeping production healthy.",
  location: "Zirakpur, Punjab, India",
  email: "me.nkj7@gmail.com",
  phone: "+91-9810354424",
  resumeUrl: `${import.meta.env.BASE_URL}Nitesh_Kumar_Resume.pdf`,
  social: {
    github: "https://github.com/nitesh-jobvite",
    linkedin: "https://www.linkedin.com/in/nitesh-kumar-192443b6/",
  },
};

// Headline stats shown in the hero / about area.
export const stats = [
  { value: "9+", label: "Years of experience" },
  { value: "6+", label: "Companies & clients" },
  { value: "Rails", label: "Core specialty" },
  { value: "24/7", label: "Production support mindset" },
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

// Featured projects — the highlights you want recruiters to see first.
export const projects = [
  {
    title: "Vertica → Snowflake Migration",
    blurb:
      "Migrated analytical data workloads from Vertica to Snowflake, building custom Ruby gems to query Snowflake via APIs and feed dashboards and reports.",
    tags: ["Snowflake", "Ruby", "Data Migration", "APIs"],
  },
  {
    title: "Solr/Google → OpenSearch Migration",
    blurb:
      "Re-platformed search from legacy Solr/Google Search onto OpenSearch, improving relevance, control, and performance of search across the product.",
    tags: ["OpenSearch", "Search", "Migration"],
  },
  {
    title: "OpenSearch-Powered Job Search API",
    blurb:
      "Built a dedicated microservice exposing a fast, scalable job-search API backed by OpenSearch, with tuned queries and indexing for low-latency results.",
    tags: ["OpenSearch", "Microservices", "Ruby on Rails", "Performance"],
  },
  {
    title: "Kubernetes / Helm Deployment Pipeline",
    blurb:
      "Containerized services with Docker and orchestrated them on Kubernetes using Helm charts for repeatable, reliable deployments.",
    tags: ["Kubernetes", "Helm", "Docker", "AWS"],
  },
  {
    title: "Dependabot & Security Upgrades",
    blurb:
      "Drove dependency and security upgrades across Rails apps — proving exploitability, applying minimal fixes, and validating safely before release.",
    tags: ["Security", "Ruby on Rails", "CVE Remediation"],
  },
  {
    title: "Production Deployment & Release Support",
    blurb:
      "Owned Rails release and deployment support with New Relic observability, acting on incidents and keeping production stable and performant.",
    tags: ["SRE", "New Relic", "On-call", "Release"],
  },
];
