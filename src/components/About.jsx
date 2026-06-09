import { profile } from "../data";
import { CodeIcon, CheckIcon, MapPinIcon } from "../icons";

const highlights = [
  {
    icon: <CodeIcon size={22} />,
    title: "Backend & APIs",
    desc: "Designing robust Ruby on Rails services and APIs that scale.",
  },
  {
    icon: <CheckIcon size={22} />,
    title: "Quality first",
    desc: "Strong test coverage, code reviews, and observability with New Relic.",
  },
  {
    icon: <MapPinIcon size={22} />,
    title: "Cloud native",
    desc: "Docker, Kubernetes & Helm deployments on AWS infrastructure.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">A bit about me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>{profile.summary}</p>
            <p>
              Over the past nine years I've grown from technical support into a
              senior engineering role — debugging production at scale, building
              search and data platforms, and owning releases end to end. I enjoy
              the unglamorous work that keeps systems healthy: clean code, good
              tests, sensible monitoring, and being reachable when on-call.
            </p>
          </div>

          <div className="about-highlights reveal">
            {highlights.map((h) => (
              <div className="about-highlight glass" key={h.title}>
                {h.icon}
                <div>
                  <strong>{h.title}</strong>
                  <span>{h.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
