import { useEffect } from "react";

// Adds a `.visible` class to every `.reveal` element as it scrolls into view.
// Uses IntersectionObserver so the entrance animation is cheap and accessible.
// Pass a `dep` (e.g. the current route) to re-observe when content remounts.
export function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dep]);
}
