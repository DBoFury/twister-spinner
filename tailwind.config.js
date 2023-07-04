/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    keyframes: {
      "ease-out-slow": {
        "0%, 80%, 100%": {
          animationTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        "90%": {
          animationTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
        },
      },
    },
    extend: {
      colors: {
        onyx: "#313638",
        blue: {
          DEFAULT: "#0000FF",
          bright: "#00BFFF",
        },
        red: {
          DEFAULT: "#FF0000",
          bright: "#FF4400",
        },
        green: {
          DEFAULT: "#00FF00",
          bright: "#7CFC00",
        },
        yellow: {
          DEFAULT: "#FFFF00",
          bright: "#FFFF66",
        },
      },
      boxShadow: {
        "blue-sd": "0 0 1rem 0.4rem #00008B",
        "red-sd": "0 0 1rem 0.4rem #8B0000",
        "green-sd": "0 0 1rem 0.4rem #008B00",
        "yellow-sd": "0 0 1rem 0.4rem #8B8B00",
      },
    },
  },
  plugins: [],
};
