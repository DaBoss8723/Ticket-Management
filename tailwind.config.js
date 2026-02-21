/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-text": "#f1f3f5",
        nav: "#e5e7eb",
        "blue-accent": "#0084d4",
        "blue-accent-hover": "#009fff",

        card: "var(--color-card)",
        "card-hover": "var(--color-card-hover)",
        page: "var(--color-page)",
      },
    },
  },
  plugins: [],
};
