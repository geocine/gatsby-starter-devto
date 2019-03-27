const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allDevArticles {
        edges {
          node {
            article {
              id
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    const allPosts = result.data.allDevArticles.edges

    // Iterate over the array of posts
    _.each(allPosts, ({ node }) => {
      const post = node.article
      // Create the Gatsby page for this WordPress post
      createPage({
        path: `/${post.slug}/`,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
