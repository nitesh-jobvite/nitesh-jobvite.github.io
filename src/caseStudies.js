// Rich case-study content, keyed by slug. Project cards on the home page
// link to #/case/<slug>, rendered by CaseStudy.jsx.
// Impact is kept qualitative/honest (no invented metrics).

export const caseStudies = {
  "vertica-snowflake": {
    title: "Vertica → Snowflake Migration",
    tagline:
      "Moving analytical workloads onto a scalable warehouse, with reusable Ruby tooling to consume it.",
    role: "Senior Software Engineer",
    org: "Employ Inc.",
    timeline: "2023 — Present",
    overview:
      "Migrated analytical data workloads off Vertica onto Snowflake and built the internal Ruby tooling that made Snowflake data easy and safe to consume across the product.",
    problem: [
      "Vertica was costly to scale and operationally heavy for a growing analytics footprint.",
      "Dashboards and reports needed data that was awkward to pull from the existing stack.",
      "Teams lacked a clean, reusable way to query analytical data from Rails apps.",
    ],
    approach: [
      {
        title: "Model & migrate datasets",
        desc: "Modeled analytical datasets in Snowflake and validated output parity against the existing Vertica reports before cutover.",
      },
      {
        title: "Build reusable access gems",
        desc: "Wrote custom internal Ruby gems wrapping Snowflake's API for safe, consistent, reusable querying from Rails.",
      },
      {
        title: "Integrate into dashboards & reports",
        desc: "Wired the gems into dashboards and reporting flows so product teams consume analytical data through one interface.",
      },
      {
        title: "Guardrails & tests",
        desc: "Added tests and guardrails around the data-access layer to keep queries predictable and maintainable.",
      },
    ],
    impact: [
      "Analytics runs on a managed, scalable warehouse instead of self-managed Vertica.",
      "Reusable gems were adopted across teams, cutting duplicated data-access code.",
      "Dashboards and reports became faster to build and maintain.",
    ],
    stack: ["Snowflake", "Ruby", "Ruby on Rails", "SQL", "Internal Gems", "APIs"],
  },

  "opensearch-migration": {
    title: "Solr / Google → OpenSearch Migration",
    tagline:
      "Re-platforming product search for relevance, performance, and full operational control.",
    role: "Senior Software Engineer",
    org: "Employ Inc.",
    timeline: "2023 — Present",
    overview:
      "Re-platformed product search from legacy Solr/Google Search onto OpenSearch, redesigning the indexing pipeline and query strategy to own relevance and performance.",
    problem: [
      "Legacy Solr/Google Search offered limited relevance tuning and little operational control.",
      "Customizing and scaling search behavior was difficult.",
      "Search quality and performance were hard to iterate on.",
    ],
    approach: [
      {
        title: "Design index & mappings",
        desc: "Designed OpenSearch index mappings, analyzers, and an indexing pipeline tailored to the product's data.",
      },
      {
        title: "Re-implement query logic",
        desc: "Rebuilt query logic with tuned relevance, filters, and analyzers for better ranking and recall.",
      },
      {
        title: "Validate parity & iterate",
        desc: "Ran parity checks against legacy search and iterated on ranking quality before rollout.",
      },
      {
        title: "Controlled rollout",
        desc: "Shipped behind controlled deploys with monitoring to catch regressions early.",
      },
    ],
    impact: [
      "Full control over the search stack and relevance tuning.",
      "Improved search performance and faster iteration on quality.",
      "Laid the foundation for a dedicated job-search API.",
    ],
    stack: ["OpenSearch", "Ruby on Rails", "Search Relevance", "Indexing", "AWS"],
  },

  "job-search-api": {
    title: "OpenSearch-Powered Job Search API",
    tagline:
      "A dedicated search microservice delivering low-latency job search at scale.",
    role: "Senior Software Engineer",
    org: "Employ Inc.",
    timeline: "2023 — Present",
    overview:
      "Built a dedicated microservice exposing a fast, scalable job-search API backed by OpenSearch, decoupling search from the monolith.",
    problem: [
      "The product needed low-latency, scalable job search that legacy search couldn't deliver.",
      "Search concerns were tangled into the monolith, making them hard to scale and evolve.",
    ],
    approach: [
      {
        title: "Stand up a search service",
        desc: "Built a standalone microservice owning search indexing and querying behind a clean API boundary.",
      },
      {
        title: "Tune indices & queries",
        desc: "Designed OpenSearch indices and tuned queries, filters, and aggregations for job-search use cases.",
      },
      {
        title: "Expose a clean API",
        desc: "Provided pagination, filtering, and faceting through an API the product consumes directly.",
      },
      {
        title: "Containerize & deploy",
        desc: "Containerized with Docker and deployed on Kubernetes via Helm, with monitoring in place.",
      },
    ],
    impact: [
      "Low-latency, scalable job search decoupled from the monolith.",
      "Independent scaling and deployment of the search service.",
      "A clear API contract for product teams to build on.",
    ],
    stack: ["OpenSearch", "Ruby on Rails", "Microservices", "Docker", "Kubernetes", "Helm"],
  },

  "security-upgrades": {
    title: "Dependabot & Security Upgrades",
    tagline:
      "Evidence-based vulnerability remediation across Rails apps — without destabilizing production.",
    role: "Senior Software Engineer",
    org: "Employ Inc.",
    timeline: "2023 — Present",
    overview:
      "Drove dependency and security upgrades across Rails applications — triaging CVEs, proving real exploitability, and shipping minimal, validated fixes.",
    problem: [
      "Rails apps accumulated dependency and security debt with open CVEs / Dependabot alerts.",
      "Blind upgrades risked destabilizing production.",
    ],
    approach: [
      {
        title: "Triage & assess exploitability",
        desc: "Triaged Dependabot alerts and assessed real exploitability against the actual code paths in use.",
      },
      {
        title: "Apply minimal fixes",
        desc: "Made targeted, minimal dependency bumps and fixes rather than risky blanket upgrades.",
      },
      {
        title: "Validate before release",
        desc: "Validated changes in-container and through the test suite before shipping.",
      },
      {
        title: "Coordinate rollout",
        desc: "Coordinated rollout to avoid production disruption.",
      },
    ],
    impact: [
      "Reduced security exposure across multiple applications.",
      "Upgrades shipped without destabilizing production.",
      "A repeatable, evidence-based approach to remediation.",
    ],
    stack: ["Ruby on Rails", "Bundler", "Dependabot", "CVE Remediation", "Docker"],
  },

  "rails-production-support": {
    title: "Rails Production Deployment & Release Support",
    tagline:
      "Owning release reliability and production stability with observability and on-call response.",
    role: "Senior Software Engineer",
    org: "Employ Inc.",
    timeline: "2023 — Present",
    overview:
      "Owned Rails release/deploy support and production stability, using New Relic observability and on-call response to keep systems healthy.",
    problem: [
      "Releases needed careful coordination and fast incident response.",
      "Production issues required quick detection and resolution.",
    ],
    approach: [
      {
        title: "Own deploys & releases",
        desc: "Owned deployment and release support across Rails applications.",
      },
      {
        title: "Instrument with New Relic",
        desc: "Set up and used New Relic monitoring to detect regressions and incidents early.",
      },
      {
        title: "Respond on-call",
        desc: "Acted on production issues during on-call, with root-cause follow-up.",
      },
      {
        title: "Improve reliability",
        desc: "Improved release reliability through better process and monitoring.",
      },
    ],
    impact: [
      "More stable production with faster detection and resolution of issues.",
      "Smoother, more predictable releases.",
      "Stronger observability across the stack.",
    ],
    stack: ["Ruby on Rails", "New Relic", "SRE / On-call", "AWS", "Kubernetes"],
  },

  "kubernetes-helm": {
    title: "Kubernetes / Helm Deployment Work",
    tagline:
      "Repeatable, templated deployments for containerized services across environments.",
    role: "Senior Software Engineer",
    org: "Employ Inc.",
    timeline: "2023 — Present",
    overview:
      "Containerized services and orchestrated repeatable, environment-aware deployments on Kubernetes using Helm.",
    problem: [
      "Services needed repeatable, reliable deployment across environments.",
      "Manual deploys were error-prone and hard to scale.",
    ],
    approach: [
      {
        title: "Containerize services",
        desc: "Packaged services with Docker for consistent runtime environments.",
      },
      {
        title: "Author Helm charts",
        desc: "Wrote Helm charts for templated, environment-aware deployments.",
      },
      {
        title: "Orchestrate rollouts",
        desc: "Orchestrated rollouts on Kubernetes with health checks and easy rollbacks.",
      },
      {
        title: "Integrate monitoring",
        desc: "Integrated deployments with monitoring for visibility and safety.",
      },
    ],
    impact: [
      "Consistent, repeatable deployments across environments.",
      "Easier scaling and safer rollbacks.",
      "Reduced deployment toil for the team.",
    ],
    stack: ["Kubernetes", "Helm", "Docker", "AWS", "Microservices"],
  },
};

// Stable ordering for prev/next navigation between case studies.
export const caseStudyOrder = [
  "vertica-snowflake",
  "opensearch-migration",
  "job-search-api",
  "security-upgrades",
  "rails-production-support",
  "kubernetes-helm",
];
