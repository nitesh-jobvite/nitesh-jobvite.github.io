import { useEffect } from "react";
import { caseStudies, caseStudyOrder } from "../caseStudies";
import { profile } from "../data";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  DownloadIcon,
  MailIcon,
} from "../icons";

// A single case-study page. `slug` selects the content from caseStudies.js.
// Falls back to the home page if the slug is unknown.
export default function CaseStudy({ slug }) {
  const study = caseStudies[slug];

  // Redirect home if the slug is unknown.
  useEffect(() => {
    if (!study) window.location.hash = "/";
  }, [study]);

  // Update document title for the case study (UX + shareability).
  useEffect(() => {
    if (!study) return;
    const prevTitle = document.title;
    document.title = `${study.title} — ${profile.name}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
    };
  }, [study]);

  if (!study) return null;

  const idx = caseStudyOrder.indexOf(slug);
  const prev = idx > 0 ? caseStudyOrder[idx - 1] : null;
  const next =
    idx < caseStudyOrder.length - 1 ? caseStudyOrder[idx + 1] : null;

  return (
    <article className="case">
      <div className="container case-container">
        <a href="#projects" className="case-back">
          <ArrowLeftIcon size={16} /> All projects
        </a>

        <header className="case-header">
          <p className="case-meta">
            {study.role} · {study.org} · {study.timeline}
          </p>
          <h1 className="case-title">{study.title}</h1>
          <p className="case-tagline">{study.tagline}</p>
          <div className="case-stack">
            {study.stack.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </header>

        <section className="case-section glass">
          <h2>Overview</h2>
          <p className="case-lead">{study.overview}</p>
        </section>

        <div className="case-split">
          <section className="case-section glass">
            <h2>The problem</h2>
            <ul className="case-list">
              {study.problem.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </section>

          <section className="case-section glass">
            <h2>Impact</h2>
            <ul className="case-list case-list-check">
              {study.impact.map((p, i) => (
                <li key={i}>
                  <CheckIcon size={16} /> {p}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="case-section">
          <h2 className="case-section-heading">Approach</h2>
          <ol className="case-steps">
            {study.approach.map((step, i) => (
              <li className="case-step glass" key={i}>
                <span className="case-step-num">{i + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Prev / next navigation */}
        <nav className="case-nav" aria-label="Case study navigation">
          {prev ? (
            <a className="case-nav-link" href={`#/case/${prev}`}>
              <ArrowLeftIcon size={16} />
              <span>
                <small>Previous</small>
                {caseStudies[prev].title}
              </span>
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a className="case-nav-link case-nav-next" href={`#/case/${next}`}>
              <span>
                <small>Next</small>
                {caseStudies[next].title}
              </span>
              <ArrowRightIcon size={16} />
            </a>
          ) : (
            <span />
          )}
        </nav>

        {/* CTA */}
        <section className="case-cta glass">
          <div>
            <h2>Interested in working together?</h2>
            <p>I'm open to senior backend, platform, and SRE-leaning roles.</p>
          </div>
          <div className="case-cta-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <MailIcon size={18} /> Contact me
            </a>
            <a
              className="btn btn-ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon size={18} /> Résumé
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
