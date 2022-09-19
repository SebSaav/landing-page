/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    fontFamily: {
      'dancing': ['Dancing Script', 'cursive'],
      'mali': ['Mali', 'bold'],
      'quicksand': ['Quicksand', 'sans-serif'],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'king': {
        light: '#667f9c',
        DEFAULT: '#002B5B',
        dark: '#001936',

        100: '#667f9c',
        200: '#4c6a8c',
        300: '#32557b',
        400: '#19406b',
        500: '#002B5B',
        600: '#002651',
        700: '#002248',
        800: '#001e3f',
        900: '#001936',
      },
      'emerald': {
        light: '#88bbb8',
        DEFAULT: '#398e89',
        dark: '#225552',

        100: '#88bbb8',
        200: '#74afac',
        300: '#60a4a0',
        400: '#4c9994',
        500: '#398e89',
        600: '#337f7b',
        700: '#2d716d',
        800: '#27635f',
        900: '#225552',
      },
      'cloudy': {
        light: '#ebf7f6',
        DEFAULT: '#def2f0',
        dark: '#859190',

        100: '#ebf7f6',
        200: '#e7f5f4',
        300: '#e4f4f3',
        400: '#e1f3f1',
        500: '#def2f0',
        600: '#c7d9d8',
        700: '#b1c1c0',
        800: '#9ba9a8',
        900: '#859190',
      },
      'skin': {
        light: '#ddccc0',
        DEFAULT: '#bb9981',
        dark: '#705b4d',

        100: '#ddccc0',
        200: '#d6c1b3',
        300: '#8ad9a',
        400: '#c1a38d',
        500: '#bb9981',
        600: '#a88974',
        700: '#957a67',
        800: '#826b5a',
        900: '#705b4d',
      },
    }
  },
  plugins: [],
}
