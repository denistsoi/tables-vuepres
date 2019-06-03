module.exports = {
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
  title: 'Hello VuePress',
  description: 'Just playing around'
}