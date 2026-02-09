// PostWind library — without Tailwind CDN auto-loading
// Usage: import PostWind from 'postwind/lib'
// User must load @tailwindcss/browser separately

import './postwind.js';

export default (typeof window !== 'undefined' ? window.PostWind : undefined);
