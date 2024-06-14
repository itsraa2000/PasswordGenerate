/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.res.mjs"],
  theme: {
    extend: {},
    colors: {
      maindark: '#222831',
      subdark: '#31363F',
      green: '#17B794',
      mainlight:'#EEEEEE',
      sublight:'#dfdfdf',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
  },
  plugins: [],
};
