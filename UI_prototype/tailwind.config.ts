import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          base: '#F5F1E8',
          card: '#FBF8F2',
          soft: '#FBF4E6',
        },
        ink: {
          DEFAULT: '#2F2A26',
          muted: '#6F655B',
          soft: '#8A7E72',
        },
        accent: {
          primary: '#35506B',
          warm: '#B27B63',
          rose: '#CF7B5B',
        },
        line: {
          paper: 'rgba(110, 90, 70, 0.25)',
        },
        letter: {
          night: '#111827',
          'night-text': '#F8FAFC',
          japanese: '#FEF3C7',
          simple: '#FEFDF8',
        },
      },
      fontFamily: {
        handwriting: ['"Courgette"', '"Hiragino Maru Gothic Pro"', 'cursive'],
      },
      boxShadow: {
        card: '0 15px 45px rgba(58, 46, 33, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
