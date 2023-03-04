/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: { 
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      colors: {
        PrimaryBtn: '#3671E9',
        PrimaryBg: '#0D0D2B',
        OtherColors: {
          100: '#0D0D2B',
          200: '#1A1A3F',
        },
        hoverPrimaryBtn: {
          100: '#004ae0'
        }
      },
      fontFamily: {
        body: ['Oxanium']
      }
    },
  },
  plugins: [],
}
