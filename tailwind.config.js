/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './index.html',
    './main.js',
    './*.{html,js}'
  ]
}
