import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette — every component reads from these tokens.
        // Tokens use <alpha-value> so Tailwind can generate opacity variants
        // (text-paper/80, bg-paper/15, etc.) — required for the dark terminal
        // + footer panels where light-on-dark text needs translucency.
        paper: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        ink: 'rgb(var(--color-fg-rgb) / <alpha-value>)',
        muted: 'rgb(var(--color-muted-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        'surface-alt': 'rgb(var(--color-surface-alt-rgb) / <alpha-value>)',
        line: 'rgb(var(--color-border-rgb) / <alpha-value>)',
        'line-strong': 'rgb(var(--color-border-strong-rgb) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover-rgb) / <alpha-value>)',
          active: 'rgb(var(--color-accent-active-rgb) / <alpha-value>)',
          soft: 'rgb(var(--color-accent-soft-rgb) / <alpha-value>)',
        },
        success: 'rgb(var(--color-success-rgb) / <alpha-value>)',
        warning: 'rgb(var(--color-warning-rgb) / <alpha-value>)',
        danger: 'rgb(var(--color-danger-rgb) / <alpha-value>)',
        info: 'rgb(var(--color-info-rgb) / <alpha-value>)',
        panel: 'rgb(var(--color-panel-rgb) / <alpha-value>)',
        /* --- Extended palette (cool editorial) --- */
        thistle: {
          DEFAULT: 'rgb(var(--color-thistle-rgb) / <alpha-value>)',
        },
        'lavender-grey': {
          DEFAULT: 'rgb(var(--color-lavender-grey-rgb) / <alpha-value>)',
        },
        cerulean: {
          DEFAULT: 'rgb(var(--color-cerulean-rgb) / <alpha-value>)',
        },
        'charcoal-blue': {
          DEFAULT: 'rgb(var(--color-charcoal-blue-rgb) / <alpha-value>)',
        },
        'jet-black': {
          DEFAULT: 'rgb(var(--color-jet-black-rgb) / <alpha-value>)',
        },
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
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
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - 1rem))' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
