module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          '100': '#CAFBF0',
          '200': '#97F8EA',
          '300': '#61EBE2',
          '400': '#39D6D8',
          '500': '#04ADBF',
          '600': '#0287A4',
          '700': '#026689',
          '800': '#01496E',
          '900': '#00355B'
        },
        pink: {
          '100': '#FEF5ED',
          '200': '#FDEADC',
          '300': '#FBDAC9',
          '400': '#F7CAB9',
          '500': '#F2B1A2',
          '600': '#D08076',
          '700': '#AE5551',
          '800': '#8C3337',
          '900': '#741F28'
        },
        green: {
          '100': '#E2F9D9',
          '200': '#C1F3B4',
          '300': '#91DC87',
          '400': '#62BA60',
          '500': '#328C38',
          '600': '#247831',
          '700': '#19642B',
          '800': '#0F5125',
          '900': '#094322'
        },
        yellow: {
          '100': '#FEFBE3',
          '200': '#FDF7C8',
          '300': '#FBF0AB',
          '400': '#F7E895',
          '500': '#F2DD72',
          '600': '#D0B953',
          '700': '#AE9739',
          '800': '#8C7524',
          '900': '#745E15'
        },
        morty: {
          '500': '#69D91A'
        }
      },
      zIndex: {
        '-10': '-10',
       },
    },
    fontFamily: {
      'sans': ['Rubik','ui-sans-serif', 'system-ui'],
      'body': ['Roboto','ui-sans-serif', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
