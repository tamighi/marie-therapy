/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#FDF5E6",
        "primary": "#FAEBD7",
        "secondary": "#C1AF93",
        "on-primary": "#000000",
        "hover": "#00000022",
      },
    },
    dropShadow: {
      "main": [
        "rgba(0, 0, 0, 0.07) 0px 1px 1px",
        "rgba(0, 0, 0, 0.07) 0px 2px 2px",
        "rgba(0, 0, 0, 0.07) 0px 4px 4px",
        "rgba(0, 0, 0, 0.07) 0px 8px 8px",
        "rgba(0, 0, 0, 0.07) 0px 16px 16px"
      ],
      "pastel": [
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
        "rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        "rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      ]
    }
  },
}

