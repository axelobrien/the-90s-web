module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,md,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee:{
          "0%": { "transform": "translatex(-50%)" },
          "100%": { "transform": "translatex(100%)" }
        }
      },
      animation: {
        marquee10: "marquee 10s linear infinite"
      }
    },
  },
  plugins: [],
}