import { profile, stats } from "../data";
import { useTypewriter } from "../useTypewriter";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
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

          <h1 className="animate-in" style={{ "--d": "0.15s" }}>
            Hi, I'm <span className="accent">{profile.name}</span>
          </h1>

          {/* Typing effect cycles through roles/skills */}
          <p className="hero-role animate-in" style={{ "--d": "0.25s" }}>
            <span className="typed">{typed}</span>
            <span className="type-cursor" aria-hidden="true" />
          </p>

          <p className="hero-tagline animate-in" style={{ "--d": "0.35s" }}>
            {profile.tagline}
          </p>

          <div className="hero-cta animate-in" style={{ "--d": "0.45s" }}>
            <a className="btn btn-primary" href="#contact">
              <MailIcon size={18} /> Get in touch
            </a>
            <a
              className="btn btn-ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon size={18} /> Download résumé
            </a>
          </div>

          <div className="hero-socials animate-in" style={{ "--d": "0.55s" }}>
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
          style={{ "--d": "0.4s" }}
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

      <div className="container">
        <div className="stats">
          {stats.map((s, i) => (
            <div
              className="stat glass reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              key={s.label}
            >
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll to content">
        <span className="scroll-mouse">
          <span className="scroll-wheel" />
        </span>
        <ChevronDownIcon size={18} />
      </a>
    </section>
  );
}
