/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        marquee: 'marquee 125s linear infinite',
        marquee2: 'marquee2 125s linear infinite',
        blurIn: 'blurIn 0.3s forwards',
        blurOut: 'blurOut 0.3s forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        blurIn: {
          '0%': { filter: 'blur(5px)' },
          '100%': { filter: 'blur(0)' },
        },
        blurOut: {
          '0%': { filter: 'blur(0)' },
          '100%': { filter: 'blur(5px)' },
        },
      },
    },
  },
  plugins: [],
};
