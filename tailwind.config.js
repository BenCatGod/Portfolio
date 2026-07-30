/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg0: 'var(--bg-0)',
        bg1: 'var(--bg-1)',
        bg2: 'var(--bg-2)',
        surface: 'var(--surface)',
        surfaceHover: 'var(--surface-hover)',
        borderc: 'var(--border)',
        borderStrong: 'var(--border-strong)',
        textPrimary: 'var(--text-primary)',
        textSecondary: 'var(--text-secondary)',
        textMuted: 'var(--text-muted)',
        accent: 'var(--accent)',
        accentStrong: 'var(--accent-strong)',
        accentSoft: 'var(--accent-soft)',
        accentRing: 'var(--accent-ring)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SFMono-Regular"', 'monospace']
      },
      borderRadius: {
        pill: '999px',
        lg2: '22px'
      }
    }
  },
  plugins: []
};
