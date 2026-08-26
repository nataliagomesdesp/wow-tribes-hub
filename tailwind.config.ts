import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wow-purple': '#550fed',
        'wow-purple-deep': '#3b0aae',
        'wow-purple-mid': '#5a18eb',
        'wow-lilac': '#bca6ff',
        'wow-lilac-light': '#eee9ff',
        'wow-gold': '#eddc45',
        'wow-ink': '#171321',
        'wow-muted': '#6f6a7c',
        'wow-line': '#e7e3ef',
        'wow-surface': '#ffffff',
        'wow-surface-soft': '#f8f7fb',
      },
      backgroundColor: {
        'dark-bg': '#1a1a1a',
        'dark-surface': '#2d2d2d',
        'dark-surface-soft': '#242424',
      },
      textColor: {
        'dark-text': '#e0e0e0',
      },
      spacing: {
        'header': '60px',
        'sidebar': '248px',
      },
      boxShadow: {
        'wow': '0 2px 12px rgba(85, 15, 237, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fadeUp': 'fadeUp 0.4s ease',
        'fadeIn': 'fadeIn 0.25s ease',
      },
      keyframes: {
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(12px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
