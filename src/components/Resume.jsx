import { profile } from "../data";
import { DownloadIcon, ExternalIcon } from "../icons";

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="resume-card reveal">
          <div>
            <h2>Want the full picture?</h2>
            <p>
              Download my résumé for the complete work history, education, and
              detailed accomplishments — or open it in a new tab to preview.
            </p>
          </div>
          <div className="resume-actions">
            <a
              className="btn btn-primary"
              href={profile.resumeUrl}
              download="Nitesh_Kumar_Resume.pdf"
            >
              <DownloadIcon size={18} /> Download PDF
            </a>
            <a
              className="btn btn-ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalIcon size={18} /> View résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
