/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'min': '280px', 'max': '479px' },   // Mobile devices
        'tablet': { 'min': '480px', 'max': '823px' },   // Tablets
        'laptop': { 'min': '824px', 'max': '1479px' },  // Laptops
        'desktop': { 'min': '1480px', 'max': '2559px' },// Standard desktops (up to 1440p)
        'large-desktop': { 'min': '2560px' }            // 4K displays and ultra-wide monitors
    }
    
    },
  },
  plugins: [],
}

