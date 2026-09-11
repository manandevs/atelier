/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FCFAF6',
        paper: '#F4F0E8',
        bone: '#EDE8DE',
        black: '#0D0D0C',
        ink: '#171613',
        muted: '#6E695F',
        faint: '#9C968A',
        gold: '#A98A4B',
        goldSoft: '#C9B183',
        line: 'rgba(13,13,12,.13)',
        lineSoft: 'rgba(13,13,12,.07)',
        lineGold: 'rgba(169,138,75,.38)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        sans: ['"Jost"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(.22,.61,.36,1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
}
