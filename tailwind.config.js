/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        struktivaGold: '#d6b25e',
        struktivaCream: '#f6d9a0',
        struktivaDark: '#0b1020',
        struktivaBlue: '#17213a',
        struktivaCard: '#162036'
      },
      boxShadow: {
        premium: '0 24px 70px rgba(0,0,0,0.34)',
        gold: '0 0 0 1px rgba(214,178,94,0.20), 0 22px 60px rgba(0,0,0,0.30)'
      }
    },
  },
  plugins: [],
}
