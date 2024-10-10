import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',
      xxl: '2000px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        custom: ['Unbounded', 'Jua-Regular'],
      },
      animation: {
        blink: 'blink 2s step-end infinite',
        pulse: 'pulse 3s infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
        pulse: {
          '0%, 100% ': { opacity: '0' },
          '15%, 45%': { opacity: '1' },
          '60%': {
            boxShadow: '0 0 0 30px rgba(255, 255, 255, 0.1)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
