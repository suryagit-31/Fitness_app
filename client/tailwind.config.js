/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#FF4F5A",
        accent: "#E63946",
        background: "#F8F8F8",
        text: {
          primary: "#1F1F1F",
          secondary: "#333333",
        },
      },
    },
  },
  plugins: [],
};
