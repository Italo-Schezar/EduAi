/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-primary',
    'text-primary',
    'bg-primary-light',
    'text-primary-light',
    'bg-primary-dark',
    'text-primary-dark',
    'bg-secondary',
    'text-secondary',
    'bg-secondary-light',
    'text-secondary-light',
    'bg-secondary-dark',
    'text-secondary-dark',
    'bg-accent',
    'text-accent',
    'bg-accent-light',
    'text-accent-light',
    'bg-accent-dark',
    'text-accent-dark',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Arial', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
