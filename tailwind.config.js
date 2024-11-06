/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'WD_E&C-Night-Shade': '#0F1425',
        'WD_E&C-Evergreen-Forest': '#113020',
        'WD_E&C-Terra-Cotta-Brown': '#5F645F',
        'WD_E&C-Tintedd-Chacoal': '#2C2E2C',
        'WD_E&C-Tinted-Slate': '#AAB2AA',
        'WD_E&C-Off-White': '#D6D9D6',
      },
      fontFamily: {
        'body': ['"Open Sans"'],
        'Kanit': ['"Kanit"']
      },
    },
    plugins: [],
  }
}