/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB624",
        "blue-1000": "#121c40",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
