import { useEffect, useState } from "react";

// Minimal dependency-free hash router. Returns the current hash path,
// e.g. "#/case/opensearch-migration" → "/case/opensearch-migration".
// Hash routing is used so deep links work on GitHub Pages without a
// server-side SPA fallback (no 404s on refresh).
export function useHashRoute() {
  const read = () => window.location.hash.replace(/^#/, "") || "/";
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

// Parse "/case/<slug>" → slug, else null.
export function caseSlugFromRoute(route) {
  const match = route.match(/^\/case\/([\w-]+)/);
  return match ? match[1] : null;
}
