// Lightweight inline SVG icons (no icon-library dependency).
// Each accepts a `size` prop and inherits color via currentColor.

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export const GitHubIcon = ({ size = 20 }) => (
  <svg {...base(size)} stroke="none" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

export const LinkedInIcon = ({ size = 20 }) => (
  <svg {...base(size)} stroke="none" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
  </svg>
);

export const MailIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const PhoneIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MapPinIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const DownloadIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

export const ExternalIcon = ({ size = 18 }) => (
  <svg {...base(size)}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
);

export const SunIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const MoonIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const MenuIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const CheckIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const CodeIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

export const ChevronDownIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowUpIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

export const SparkIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

export const SearchIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const CloudIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-1.3A7 7 0 1 0 5 17.6" />
    <path d="M17.5 19H7" />
  </svg>
);

export const SupportIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.2" />
    <path d="m5.6 5.6 3.1 3.1M15.3 15.3l3.1 3.1M18.4 5.6l-3.1 3.1M8.7 15.3l-3.1 3.1" />
  </svg>
);

export const FileTextIcon = ({ size = 22 }) => (
  <svg {...base(size)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 13h6M9 17h6M9 9h1" />
  </svg>
);
