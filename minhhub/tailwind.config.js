/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#fcfcfc",
          200: "#011c42"
        },
        white: "#fff",
        black: "#000",
        lightgray: "#d3d7da",
        aliceblue: "#dfe9f4",
        ghostwhite: "#f2f5ff",
        darkslategray: "#03344f",
        primary: "#054c73",
        "font-color": "#333",  // Primary font color
        "font-secondary": "#666" // Secondary font color
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      borderRadius: {
        "10xs": "3px",
        "31xl": "50px",
        "41xl": "60px"
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: "100%",  // 100% width on small screens (mobile)
          md: "90%",   // 90% width on medium screens (tablet)
          lg: "85%",   // 85% width on large screens (desktop)
          xl: "80%",   // 80% width on extra-large screens (wide desktop)
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
    fontSize: {
      sm: "14px",
      base: "16px",  // Standard base font size
      xl: "20px",
      "5xl": "24px",
      "13xl": "32px",
      inherit: "inherit"
    }
  },
  corePlugins: {
    preflight: true // Set this to true unless you have a custom CSS reset
  }
}
