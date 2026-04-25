import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0c1322',
        'surface-low': '#141b2b',
        'surface-container': '#191f2f',
        'surface-high': '#232a3a',
        'surface-highest': '#2e3545',
        'surface-lowest': '#070e1d',
        'on-surface': '#dce2f7',
        'on-surface-variant': '#c3c6d7',
        primary: '#b4c5ff',
        'primary-container': '#2563eb',
        'outline-variant': '#434655',
        gold: '#d4af37',
        neon: '#00d2ff',
      },
      fontFamily: {
        headline: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        full: '9999px',
      },
      backgroundImage: {
        'blueprint-grid':
          'radial-gradient(circle, rgba(67,70,85,0.15) 1px, transparent 1px)',
      },
      backgroundSize: {
        'blueprint': '30px 30px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
