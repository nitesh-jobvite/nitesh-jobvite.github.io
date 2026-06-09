import { useEffect, useState } from "react";
import { profile } from "../data";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "../icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="container nav-inner" aria-label="Primary">
        <a href="#home" className="nav-logo">
          {profile.name.split(" ")[0]}
          <span>.</span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? "active" : ""}
                aria-current={active === l.href.slice(1) ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
