/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#50C6CC',
        'brand-blue': '#2E94C1',
        'brand-navy': '#1A2B3D',
        'surface-white': '#FFFFFF',
        'surface-pale': '#EFFAFB',
        'text-body': '#3D4A5C',
        'border-soft': '#DCEEF1',
        'brand-blue-hover': '#247ba3',
        'brand-teal-light': '#6ed2d8',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': 'none',
        'card-hover': '0 8px 24px -4px rgba(26, 43, 61, 0.08)',
        'btn': 'none',
        'btn-hover': '0 4px 12px rgba(46, 148, 193, 0.25)',
        'dashboard': '0 10px 30px -10px rgba(26, 43, 61, 0.07)',
        'floating': '0 10px 25px -5px rgba(26, 43, 61, 0.08)',
        'floating-hover': '0 14px 28px -4px rgba(26, 43, 61, 0.12)',
      }
    },
  },
  plugins: [],
}
