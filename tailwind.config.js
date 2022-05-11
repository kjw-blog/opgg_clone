module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: '#ECF2FF',
          200: '#D5E3FF',
          300: '#B3CDFF',
          400: '#81ACFF',
          500: '#5383E8',
          600: '#4171D6',
          700: '#2F5EC0',
          800: '#2F436E',
          900: '#28344E',
        },
        gray: {
          100: '#F7F7F9',
          200: '#ebeef1',
          250: '#DBE0E4',
          300: '#C3CBD1',
          400: '#9AA4AF',
          500: '#758592',
          600: '#57646F',
          700: '#44515C',
          800: '#34414D',
          900: '#202D37',
        },
        blue: {
          100: '#DDF9FF',
          200: '#90E5F7',
          300: '#52D5F3',
          400: '#00B8ED',
          500: '#0093FF',
          600: '#006DE2',
          700: '#095BB3',
          800: '#114882',
          900: '#183955',
        },
      },
    },
  },
  darkMode: 'class',

  plugins: [],
};
