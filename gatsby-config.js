module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-dev',
      options: {
        // your Dev.to username
        username: 'geocine'
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ],
}
