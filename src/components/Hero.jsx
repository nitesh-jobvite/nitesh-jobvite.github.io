import { profile } from "../data";
import { useTypewriter } from "../useTypewriter";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  FileTextIcon,
  CodeIcon,
  MapPinIcon,
  CheckIcon,
  ChevronDownIcon,
} from "../icons";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .join("");

const cardPoints = [
  "Ruby on Rails specialist",
  "OpenSearch & Snowflake",
  "AWS · Kubernetes · Helm",
];

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-status animate-in" style={{ "--d": "0.05s" }}>
            <span className="status-dot" aria-hidden="true" />
            Open to senior backend / platform roles
          </span>

          <p className="hero-eyebrow animate-in" style={{ "--d": "0.12s" }}>
            Hi, I'm <strong>{profile.name}</strong> — {profile.role}
          </p>

          <h1 className="animate-in" style={{ "--d": "0.2s" }}>
            Building scalable <span className="accent">Rails platforms</span>,{" "}
            <span className="accent">search systems</span>, and production-ready{" "}
            <span className="accent">cloud solutions</span>.
          </h1>

          {/* Typing effect cycles through core skills */}
          <p className="hero-role animate-in" style={{ "--d": "0.3s" }}>
            <span className="hero-role-label">Specializing in</span>
            <span className="typed">{typed}</span>
            <span className="type-cursor" aria-hidden="true" />
          </p>

          <p className="hero-tagline animate-in" style={{ "--d": "0.4s" }}>
            {profile.tagline}
          </p>

          <div className="hero-cta animate-in" style={{ "--d": "0.5s" }}>
            <a className="btn btn-primary" href="#projects">
              <CodeIcon size={18} /> View Projects
            </a>
            <a className="btn btn-ghost" href="#resume">
              <FileTextIcon size={18} /> View Resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              <MailIcon size={18} /> Contact Me
            </a>
          </div>

          <div className="hero-socials animate-in" style={{ "--d": "0.6s" }}>
            <a
              className="icon-btn"
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              className="icon-btn"
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              className="icon-btn"
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <aside
          className="hero-card glass animate-in"
          style={{ "--d": "0.45s" }}
          aria-label="Profile summary"
        >
          <div className="hero-avatar">{initials}</div>
          <h3>{profile.name}</h3>
          <p className="hero-card-meta">
            <MapPinIcon size={14} /> {profile.location}
          </p>
          <ul className="hero-card-list">
            {cardPoints.map((p) => (
              <li key={p}>
                <CheckIcon size={16} /> {p}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Scroll indicator */}
      <a href="#achievements" className="scroll-indicator" aria-label="Scroll to content">
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
        <ChevronDownIcon size={18} />
      </a>
    </section>
  );
}
