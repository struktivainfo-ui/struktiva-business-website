/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        struktivaGold: '#d8b75f',
        struktivaSilver: '#d6d6d0',
        struktivaChampagneSilver: '#f4f4f1',
        struktivaInk: '#111111',
        struktivaCard: '#151515',
      },
      boxShadow: {
        premium: '0 24px 72px rgba(0,0,0,0.24), 0 10px 24px rgba(94,94,90,0.12)',
        gold: '0 0 0 1px rgba(216,183,95,0.26), 0 20px 52px rgba(0,0,0,0.22)',
      },
    },
  },
  plugins: [],
}
