/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yes: '#3fb68b',
        no: '#ff5353',
        info: '#00b2ff',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: 'var(--bg-active)',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "color-scheme": "light",
          "primary": "#ff9800",         // Oranye sebagai warna utama
          "primary-content": "#ffffff", // Konten utama kontras dengan oranye
          "secondary": "#f000b8",
          "secondary-content": "#FFD1F4",
          "accent": "#1ECEBC",
          "accent-content": "#07312D",
          "neutral": "#2B3440",
          "neutral-content": "#D7DDE4",
          "base-100": "#ffffff",
          "base-200": "#FFF3E0",        // Warna dasar 200 dengan sentuhan oranye
          "base-300": "#FFE0B2",        // Warna dasar 300 dengan sentuhan oranye
          "base-content": "#1f2937",
        },
        dark: {
          "color-scheme": "dark",
          "primary": "#ff9800",         // Oranye sebagai warna utama
          "primary-content": "#ffffff", // Konten utama kontras dengan oranye
          "secondary": "#D926AA",
          "secondary-content": "#ffffff",
          "accent": "#1FB2A5",
          "accent-content": "#ffffff",
          "neutral": "#2a323c",
          "neutral-focus": "#242b33",
          "neutral-content": "#A6ADBB",
          "base-100": "#1d232a",
          "base-200": "#292D32",        // Warna dasar 200 dengan sentuhan gelap oranye
          "base-300": "#3A3E44",        // Warna dasar 300 dengan sentuhan gelap oranye
          "base-content": "#A6ADBB",
        },
      },
    ],
  },
};
