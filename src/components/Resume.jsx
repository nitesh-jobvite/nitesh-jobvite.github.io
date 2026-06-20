import { profile } from "../data";
import { DownloadIcon, ExternalIcon, CheckIcon } from "../icons";

const resumePreview = `${import.meta.env.BASE_URL}resume-preview.png`;

const highlights = [
  "10+ years across product engineering & support",
  "Ruby on Rails, OpenSearch, Snowflake",
  "AWS · Kubernetes · Helm · Docker",
  "Production support & SRE / on-call",
];

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Résumé</span>
          <h2 className="section-title">My résumé, at a glance</h2>
          <p className="section-sub">
            Preview the first page, or grab the full PDF for the complete work
            history and details.
          </p>
        </div>

        <div className="resume-layout">
          {/* Preview card with a real thumbnail of the PDF's first page */}
          <a
            className="resume-preview glass reveal"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open résumé PDF"
          >
            <img
              src={resumePreview}
              alt="Preview of Nitesh Kumar's résumé"
              loading="lazy"
              width="700"
              height="906"
            />
            <span className="resume-preview-overlay">
              <ExternalIcon size={18} /> Open PDF
            </span>
          </a>

          <div className="resume-info reveal">
            <ul className="resume-highlights">
              {highlights.map((h) => (
                <li key={h}>
                  <CheckIcon size={16} /> {h}
                </li>
              ))}
            </ul>

            <div className="resume-actions">
              <a
                className="btn btn-primary"
                href={profile.resumeUrl}
                download="Nitesh_Kumar_Resume.pdf"
              >
                <DownloadIcon size={18} /> Download Resume
              </a>
              <a
                className="btn btn-ghost"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalIcon size={18} /> View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
