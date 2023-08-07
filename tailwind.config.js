const withAnimations = require('animated-tailwindcss')

module.exports = withAnimations({
  content: ['*'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffffff',

          secondary: '#000000',

          accent: '#254c5f',

          neutral: '#191D24',

          'base-100': '#2A303C',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
})
