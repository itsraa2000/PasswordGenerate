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
  },
  plugins: [],
};
