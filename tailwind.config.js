import colors from "@material-tailwind/html/theme/base/colors";
import withMT from "@material-tailwind/html/utils/withMT";
 
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './templates/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'violet' : "#03045e",
        'blue' : "#0077b6",
        'skyblue' : "#00b4d8",
        'lightsky' : "#90e0ef",
        'gray' : "#caf0f8"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
});