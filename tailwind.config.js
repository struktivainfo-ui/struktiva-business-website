/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        struktivaGold: '#d6b25e',
        struktivaDark: '#070a12',
        struktivaBlue: '#101a31',
        struktivaCard: '#111827'
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0,0,0,0.45)',
        gold: '0 0 0 1px rgba(214,178,94,0.18), 0 24px 70px rgba(0,0,0,0.38)'
      }
    },
  },
  plugins: [],
}
