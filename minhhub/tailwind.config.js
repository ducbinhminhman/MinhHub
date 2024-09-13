/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
      "extend": {
          "colors": {
              "gray": {
                  "100": "#fcfcfc",
                  "200": "#011c42"
              },
              "white": "#fff",
              "font-color": "#333",
              "primary-color": "#054c73",
              "darkslategray": "#03344f",
              "ghostwhite": "#f2f5ff",
              "font-color1": "#666",
              "lightgray": "#d3d7da",
              "black": "#000",
              "aliceblue": "#dfe9f4"
          },
          "spacing": {},
          "fontFamily": {
              "montserrat": "Montserrat",
              "roboto": "Roboto",
              "inter": "Inter"
          },
          "borderRadius": {
              "10xs": "3px",
              "31xl": "50px",
              "41xl": "60px"
          }
      },
      "fontSize": {
          "sm": "14px",
          "5xl": "24px",
          "base": "16px",
          "xl": "20px",
          "13xl": "32px",
          "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}