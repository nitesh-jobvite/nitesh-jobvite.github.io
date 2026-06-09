import { profile } from "../data";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedInIcon,
} from "../icons";

const channels = [
  {
    icon: <MailIcon size={22} />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <PhoneIcon size={22} />,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: <LinkedInIcon size={22} />,
    label: "LinkedIn",
    value: "nitesh-kumar",
    href: profile.social.linkedin,
  },
  {
    icon: <MapPinIcon size={22} />,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-sub">
            I'm open to senior backend, platform, and SRE-leaning roles. The
            fastest way to reach me is email.
          </p>
        </div>

        <div className="contact-grid">
          {channels.map((c) => {
            const inner = (
              <>
                <span className="contact-icon">{c.icon}</span>
                <span>
                  <span className="label">{c.label}</span>
                  <br />
                  <span className="value">{c.value}</span>
                </span>
              </>
            );
            return c.href ? (
              <a
                className="contact-card reveal"
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {inner}
              </a>
            ) : (
              <div className="contact-card reveal" key={c.label}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
