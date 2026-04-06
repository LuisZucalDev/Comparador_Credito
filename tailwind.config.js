/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,html}", "./public/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        emerald: {
          50: '#f0fdf4',
          500: '#10b981',
          600: '#059669',
          700: '#047857'
        },
        brand: {
          chile: '#003399',
          santander: '#ec0000',
          bci: '#003cff',
          estado: '#ff5000',
          scotia: '#004731',
          itau: '#ff6900'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'border-flow': 'borderFlow 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        borderFlow: {
          '0%, 100%': { 'border-color': 'rgba(255,255,255,0.1)' },
          '50%': { 'border-color': 'rgba(255,255,255,0.5)' },
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      boxShadow: {
        'executive': '0 10px 40px -10px rgba(0, 0, 0, 0.05), 0 5px 20px -5px rgba(0, 0, 0, 0.02)',
        'luxury': '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
        'elite': '0 30px 70px -15px rgba(15, 23, 42, 0.15)',
        'soft-glow': '0 0 50px -10px rgba(99, 102, 241, 0.15)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.2)',
        'glow-rose': '0 0 30px -5px rgba(244, 63, 94, 0.2)',
        'glow-brand': '0 0 40px -10px var(--glow-color, rgba(15, 23, 42, 0.15))',
      },
    },
  },
  safelist: [
    { pattern: /(bg|text|border|ring|shadow)-(navy|emerald|rose|brand-chile|brand-santander|brand-bci|brand-estado|brand-scotia|brand-itau)-(50|100|200|300|400|500|600|700|800|900)/, variants: ['hover', 'dark', 'focus'] },
    'bg-slate-900', 'text-white', 'border-slate-800', 'bg-white/10', 'backdrop-blur-md', 'shadow-glow-emerald', 'shadow-glow-rose'
  ],
  plugins: [],
}
