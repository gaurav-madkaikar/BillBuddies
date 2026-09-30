/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003440',
          container: '#004c5c',
          fixed: '#b2ebff',
          'fixed-dim': '#8bd1e8',
        },
        secondary: {
          DEFAULT: '#536167',
          container: '#d6e5ec',
        },
        tertiary: {
          DEFAULT: '#65000c',
          container: '#89141b',
          'fixed-dim': '#ffb3ae',
        },
        surface: {
          DEFAULT: '#f8fafb',
          container: '#eceeef',
          'container-low': '#f2f4f5',
          'container-lowest': '#ffffff',
          'container-high': '#e6e8e9',
          'container-highest': '#e1e3e4',
          variant: '#e1e3e4',
          bright: '#f8fafb',
          dim: '#d8dadb',
        },
        background: '#f8fafb',
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        'on-primary': '#ffffff',
        'on-surface': '#191c1d',
        'on-background': '#191c1d',
        'on-error': '#ffffff',
        'on-secondary': '#ffffff',
        'on-tertiary': '#ffffff',
        outline: '#71787d',
        'outline-variant': '#c0c7cd',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        'sm': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '0.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
