/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"]
      },
      backgroundImage:{
        'gradient-blue':'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)',
        'Mello-yellow':'linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)'
      },
      screens:
      {

      }
    }
  },
  plugins: []
};
