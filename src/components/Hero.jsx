import { profile } from "../data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  FileTextIcon,
  CodeIcon,
  ChevronDownIcon,
} from "../icons";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <p className="hero-eyebrow animate-in" style={{ "--d": "0.05s" }}>
          <span className="hero-eyebrow-line" aria-hidden="true" />
          {profile.role} · Available for senior roles
        </p>

        <h1 className="hero-title animate-in" style={{ "--d": "0.15s" }}>
          Engineering <span className="accent">scalable platforms</span>,{" "}
          <span className="accent">search systems</span>, and{" "}
          <span className="accent">cloud-native solutions</span>.
        </h1>

        <p className="hero-lead animate-in" style={{ "--d": "0.3s" }}>
          I'm <strong>Nitesh Kumar</strong>, a Senior Software Engineer focused
          on Ruby on Rails, OpenSearch, Snowflake, AWS, Kubernetes, and
          production-ready systems.
        </p>

        <div className="hero-cta animate-in" style={{ "--d": "0.42s" }}>
          <a className="btn btn-primary" href="#projects">
            <CodeIcon size={18} /> View Work
          </a>
          <a className="btn btn-ghost" href="#resume">
            <FileTextIcon size={18} /> Résumé
          </a>
          <a className="btn btn-ghost" href="#contact">
            <MailIcon size={18} /> Contact
          </a>
        </div>

        <div className="hero-socials animate-in" style={{ "--d": "0.54s" }}>
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
          <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#achievements" className="scroll-indicator" aria-label="Scroll to explore">
        <span className="scroll-text">Scroll to explore</span>
        <ChevronDownIcon size={18} />
      </a>
    </section>
  );
}
