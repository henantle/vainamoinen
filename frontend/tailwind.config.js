/* Tailwind CSS Configuration */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // slate-900
        foreground: '#e2e8f0', // slate-200
        primary: '#38bdf8',    // sky-400
        secondary: '#9333ea',  // purple-600
        accent: '#22c55e',     // green-500
        muted: '#94a3b8'       // slate-400
      }
    },
  },
  plugins: [],
};
