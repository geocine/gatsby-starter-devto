import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allDevArticles.edges.map((node, key) => 
        <BlogCard key={key} post={node.node.article} />
        )}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allDevArticles {
      edges {
        node {
          article {
            title,
            slug,
            description,
            body_html
          }
        }
      }
    }
  }
`
