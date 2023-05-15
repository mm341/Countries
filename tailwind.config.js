module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      xs: '480px',
      sm: '560px',
      md: '800px',
      lg: '990px',
      xl: '1200px',
      xxl: '1600px'
    },
    fontSize: {
      base: '1.6rem'
    },
    extend: {

      fontFamily: {

       Montserrat:['Montserrat', 'sans-serif'],

      }

    },
  },
  plugins: [],
};
