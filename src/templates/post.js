import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'

const Post = ({ data }) => {
  const post = data.allDevArticles.edges[0].node.article

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPost post={post} />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PageQuery($id: Int!) {
    allDevArticles(filter: { article: { id: { eq: $id } } }) {
      edges {
        node {
          article {
            title
            slug
            body_html
          }
        }
      }
    }
  }
`
