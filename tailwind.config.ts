import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette — every component reads from these tokens.
        paper: 'var(--color-bg)',
        ink: 'var(--color-fg)',
        muted: 'var(--color-muted)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        line: 'var(--color-border)',
        'line-strong': 'var(--color-border-strong)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          active: 'var(--color-accent-active)',
          soft: 'var(--color-accent-soft)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        info: 'var(--color-info)',
        panel: 'var(--color-panel)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        // Alias sans → body so legacy `font-sans` refs keep working.
        sans: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '10px',
        xl: '14px',
        '2xl': '14px',
        '3xl': '16px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(27, 24, 21, 0.05)',
        md: '0 4px 12px rgba(27, 24, 21, 0.06), 0 1px 3px rgba(27, 24, 21, 0.04)',
        lg: '0 12px 32px rgba(27, 24, 21, 0.08), 0 2px 6px rgba(27, 24, 21, 0.04)',
        xl: '0 24px 56px rgba(27, 24, 21, 0.10), 0 4px 12px rgba(27, 24, 21, 0.05)',
        glow: '0 0 40px rgba(176, 85, 46, 0.15)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-standard)',
        'in-out': 'var(--ease-in-out)',
        standard: 'var(--ease-standard)',
        emphasized: 'var(--ease-emphasized)',
      },
      maxWidth: {
        content: '1280px',
        editorial: '720px',
      },
    },
  },
  plugins: [],
};
export default config;
