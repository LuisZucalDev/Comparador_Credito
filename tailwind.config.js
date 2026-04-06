/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,html}", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eff6ff',
          500: '#1e40af',
          600: '#1d4ed8',
          700: '#1e3a8a'
        }
      }
    },
  },
safelist: [
  'bg-navy-50',
  'bg-navy-500',
  'bg-navy-600',
  'bg-navy-700',
  'text-navy-600',
  'hover:text-navy-600',
  'border-navy-500',
  'focus:ring-navy-500',
  'focus:border-navy-500',
  'backdrop-blur-md',
  'bg-white/80',
  'bg-white/95',
  'border-gray-200/50',
  'hover:shadow-md',
  'hover:shadow-lg',
  'hover-lift'
],
plugins: [],
  darkMode: 'class',
}

