/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#FDF5E6",
        "surface": "#FAEBD7",
        "primary": "#75583B",
        "primary-text": "#000000",
        "secondary-text": "#FFFFFF",
      },
      spacing: {
        "8xl": "96rem"
      },
    },
    fontFamily: {
      main: ["Poppins", "sans-serif"]
    },
    boxShadow: {
      "main": [
        "rgba(0, 0, 0, 0.07) 0px 1px 1px",
        "rgba(0, 0, 0, 0.07) 0px 2px 2px",
        "rgba(0, 0, 0, 0.07) 0px 4px 4px",
        "rgba(0, 0, 0, 0.07) 0px 8px 8px",
        "rgba(0, 0, 0, 0.07) 0px 16px 16px"
      ],
      "icon": [
        "rgba(0, 0, 0, 0.08) 0px -6px 6px 0px inset",
        "rgba(0, 0, 0, 0.06) 0px 2px 1px",
        "rgba(0, 0, 0, 0.09) 0px 4px 2px",
        "rgba(0, 0, 0, 0.09) 0px 8px 4px",
        "rgba(0, 0, 0, 0.09) 0px 32px 16px"
      ]
    },
  },
}

