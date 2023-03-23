/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        navColor: '#F9F5E0',
        fotColor: '#222222',
        mainOrige: '#FF9900',
      },
      textColor: {
        navFontColor: '#4A2919',
      },
      width: {
        1200: '1200px',
        120: '120px',
        dropdown: '78.3%',
        dropdownbrew: '196px',
        dropdownstory: '181px',
        dropdownlist: '166px',
      },
      height: {
        920: '920px',
        '10vh': '7vh',
        '90vh': '93vh',
      },
      minHeight: {
        '90vh': '93vh',
      },
      margin: {
        '10vh': '7vh',
        dropdown: '140px',
        dropdown1: '196px',
      },
      zIndex: {
        100: 100,
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: { 'fade-in-up': 'fade-in-up 1s ease-out' },
      backgroundImage: {
        //'hero-pattern': "url('/img/hero-pattern.svg')",
        mainBg1: "url('../public/mainImg/bg1.jpg')",
        mainBg2: "url('../public/mainImg/bg2.svg')",
        mainBg3: "url('../public/mainImg/bg3.jpg')",
      },
      spacing: {
        47: '47%',
        '1/10': '10%',
      },
    },
  },
  plugins: [],
};
