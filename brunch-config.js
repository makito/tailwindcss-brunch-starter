const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

const cssnano = require('cssnano')({
  preset: 'default',
})

module.exports = {
  files: {
    javascripts: {joinTo: 'js/main.js'},
    stylesheets: {joinTo: 'styles/main.css'},
  },
  plugins: {
    postcss: {
      processors: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
          ? [purgecss, cssnano]
          : []
      ],
    },
  },
  paths: {
    public: './dist',
    watched: ['./src'],
  },
}