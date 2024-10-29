/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  daisyui: {
    themes: ["light"],
  },
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4f46e5',
        'darkblue':'rgb(8, 8, 87)',
        'roseorange':'#fe5153'
        

      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',],

      }
   
   

    },
  },
  plugins: [require("flyonui"),
    require("flyonui/plugin"),
    nextui()]
}

