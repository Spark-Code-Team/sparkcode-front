/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dana: ['DanaLight', 'sans-serif'],
      },

      keyframes: {
        spinSpring: {
          "0%": { transform: "rotate(-360deg) scale(0)", opacity: "0" },
          "80%": { transform: "rotate(0deg) scale(1.2)", opacity: "1" }, // یکم بزرگ‌تر از اندازه اصلی
          "100%": { transform: "rotate(0deg) scale(1)", opacity: "1" }, // برگشت به اندازه اصلی
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatText: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatAndColor: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)", backgroundColor: "#2e567d" },
          "50%": { transform: "translateY(-20px) translateX(10px)", backgroundColor: "#9333ea" },
        },
        textGlow: {
          "0%, 100%": { boxShadow: "0 0 15px #9333ea" },
          "50%": { boxShadow: "0 0 15px #38bdf8" }, // فیروزه‌ای برای افکت درخشش
        },

        textColor: {
          "0%, 100%": { color: "white" },
          "50%": { color: "#38bdf8" }, // فیروزه‌ای برای افکت درخشش
        },
        textColor2: {
          "0%, 100%": { color: "white" },
          "50%": { color: "#9333ea" }, // فیروزه‌ای برای افکت درخشش
        },
      },
      animation: {
        spinSpring: "spinSpring 2.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        floatText: "floatText 3s ease-in-out infinite",
        floatAndColor: "floatAndColor 6s ease-in-out infinite",
        textGlow: "textGlow 3s ease-in-out infinite",
        textColor:"textColor 2s ease-in-out infinite",
        textColor2:"textColor2 2s ease-in-out infinite"
      },

    },

  },
  plugins: [],
}

