/** Tailwind-Build für die statische Kontor-Landingpage (ersetzt die Play-CDN).
 *  Nach Klassen-Änderungen in index.html neu bauen:  npm run build:css
 *  Gespiegelt aus der früheren Inline-`tailwind.config` (v3).
 */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: { 400: '#7CA3F7', 500: '#5690F4', 600: '#5E63EA', 700: '#6C38E0' },
      },
    },
  },
};
