import { profile, stats } from "../data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  MapPinIcon,
  CheckIcon,
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
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="reveal">
          <span className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            Open to senior backend / platform roles
          </span>

          <h1>
            Hi, I'm <span className="accent">{profile.name}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-cta">
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

          <div className="hero-socials">
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

        <aside className="hero-card reveal" aria-label="Profile summary">
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
          {stats.map((s) => (
            <div className="stat reveal" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
