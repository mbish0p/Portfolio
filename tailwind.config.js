module.exports = {
  important: true,
  purge: {
    content: ["./src/**/*.{js,ts,tsx,scss,tpl}"]
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        lg: "30px",
      },
    },
    extend: {
      fontFamily: {
        body: 'HyundaiSansHead'
      },
    },
    colors: {
      white: '#fff',
      black: '#000',
      transparent: '#ffffff00',
      primary: '#002455',
      violet: '#bb00ff',
      'primary-light': '#002e69',
      'secondary': '#00b1d3',
      'secondary-light': '#9dd4f2',
      'accent': '#ee401e',
      'gray': '#ece6e6',
      'gray-light': '#f5f1f0',
      'sand': '#d0c9bf',
      'gray-dark': '#353535',
      'sand-dark': '#636363',
      'blue-info': '#4287f5'
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
    },
    screens: {
      sm: "510px",
      // => @media 510px // => container 480px
      md: "768px",
      // => @media 798px // => container 768px
      lg: "1054px",
      // => @media 1054px // => container 1024px
      xl: "1300px",
      // => @media 1320px // => container 1240px
    },
  },
};
