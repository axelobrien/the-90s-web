module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,md,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee:{
          "0%": { "transform": "translatex(100%)"},
          "100%": { "transform": "translatex(0%)"}
        },
        marqueeText:{
          "0%": { "transform": "translatex(100%)"},
          "100%": { "transform": "translatex(-100%)"}
        },
        blink: {
          "0%": { "visibility": "hidden"},
          "50%": { "visibility": "hidden"},
          "100%": { "visibility": "visible"}
        }
      },
      animation: {
        marquee10: "marquee 10s linear infinite",
        marqueeText10: "marqueeText 10s linear infinite",
        blink: "blink 1s linear infinite"
      }
    },
  },
  plugins: [],
}