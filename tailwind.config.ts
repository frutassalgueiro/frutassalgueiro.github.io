import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        leaf: '#2f6b3b',
        moss: '#4b8a56',
        cream: '#f6f3ea',
        bark: '#2d2a24',
        clay: '#c77d4f'
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
