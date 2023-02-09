/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1440px',
    },
    extend: {
      width: {
        '1440': '90rem',
        
      },
      height:{
        '628':'39rem',
        '820':'51rem'
      },
    }
  },
  plugins: [],
}