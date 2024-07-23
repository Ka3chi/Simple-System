import colors from "@material-tailwind/html/theme/base/colors";
import withMT from "@material-tailwind/html/utils/withMT";
 
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './templates/**/*.html'
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
});