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
      backgroundColor: {
        bgSoft: "#0d0c22",
        btn: "#3673fd",
        btn2: "#e5e5e5",
      },
      textColor: {
        white: "white",
        red: "#ff0000",
        textSoft: "#e5e5e5",
        btn: "#3673fd",
      },
    },
  },
  plugins: [],
};
