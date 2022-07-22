/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        xsm: "400px",
        sm: "600px",
        md: "900px",
        smd: "1000px",
        lg: "1200px",
        xl: "1536px",
      },
      fontFamily: {
        inter: "Inter",
        arial: "Arial",
        podium49: "PODIUMSharp-49",
        podium96: "PODIUMSharp-96",
      },
      fontColor: {
        white: "#ffffff",
      },
      colors: {
        gradient1: "#086BDF",
        gradient2: "#7381FC",
        black1: "#070707",
        black2: "#1A1A1A",
        grey: "#A6A6A6",
        grey3: "#D3D3D3",
        light: "#8E8E93",
        white: "#ffffff",
        blue3: "#73AAFC",
        yellow: "rgb(255, 235, 98)",
        blue: "rgb(88, 192, 208)",
      },
    },
  },
  plugins: [],
};
