const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      mobile: { max: '639px' },
      tablet: { min: '640px', max: '1023px' },
      desktop: { min: '1024px' },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#705CF5',
          50: '#FFFFFF',
          100: '#F7F6FE',
          200: '#D5CFFC',
          300: '#B3A9FA',
          400: '#9282F7',
          500: '#705CF5',
          600: '#4227F2',
          700: '#270DD4',
          800: '#1D0A9F',
          900: '#14076A',
          950: '#0F0550',
        },
        'vibrant-violet': {
          DEFAULT: '#A82FFF',
        },
        navy: {
          DEFAULT: '#3550AF',
        },
        'midnight-blue': {
          DEFAULT: '#1D2432',
        },
        'super-dark': {
          DEFAULT: '#111827',
        },
        'twilight-blue': {
          DEFAULT: '#252E40',
        },
        'lavender-ash': {
          DEFAULT: '#252E40',
        },
        'bg-color': {
          100: '#E4E6F5',
          200: '#E4E6F9',
          300: '#b6b8c4',
          400: '#9fa1ab',
          500: '#888a92',
          600: '#5b5c62',
          700: '#4a4b50',
          DEFAULT: '#E4E6F5',
        },
        'text-color': {
          1: '#0B0C1B',
          2: '#292A35',
          3: '#4C4F6B',
          4: '#858699',
          5: '#E4E6F5',
        },
        error: {
          disabled: '#FA9898',
          normal: '#EB5757',
          hover: '#D83A3A',
        },
        success: {
          disabled: '#5ba5c7',
          normal: '#0a77a8',
          hover: '#085c82',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
              code: { color: theme('colors.blue.400') },
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
