import { profile } from "../data";
import { GitHubIcon, LinkedInIcon } from "../icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © 2026 {profile.name}. Built with React &amp; Vite.
        </p>
        <div className="footer-socials">
          <a
            className="icon-btn"
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            className="icon-btn"
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
