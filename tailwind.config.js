/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
			
        'mobile': { 'min': '280px', 'max': '479px' },  // Custom breakpoint for mobile devices
        'tablet': { 'min': '480px', 'max': '823px' },  // Custom breakpoint for tablets
        'laptop': { 'min': '824px', 'max': '1479px' }, // Custom breakpoint for laptops
        'desktop': { 'min': '1480px' },                // Custom breakpoint for desktops
        },
    },
  },
  plugins: [],
}

