// PostWind bundle — auto-loads Tailwind CSS v4 browser runtime from CDN
// Usage: import PostWind from 'postwind'

import './postwind.js';

// Auto-inject Tailwind browser runtime if not already present
if (typeof document !== 'undefined' && !document.querySelector('script[src*="tailwindcss/browser"]')) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
  document.head.appendChild(script);
}

export default (typeof window !== 'undefined' ? window.PostWind : undefined);
