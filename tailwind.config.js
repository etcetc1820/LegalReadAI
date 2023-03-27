/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary:"#FF6978",
        secondary:"#340068",
        accent:"#6D435A",
        buttontx: "#444444",
        buttonbg: "#AACCCC",
        Background: "#ffffff",
        Navbar: "#8E8B8B",
      },
      fontFamily: {
        'FiraM': ['Fira Mono', 'monospace'],
        'FiraS': ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
