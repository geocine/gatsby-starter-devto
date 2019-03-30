module.exports = {
  siteMetadata: {
    title: 'Gatsby + Dev.to Starter',
  },
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
    'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
