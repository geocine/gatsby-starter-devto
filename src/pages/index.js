import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'

const IndexPage = ({ data }) => (
  <Layout>
    {data.allDevArticles.edges.map((node, key) => (
      <BlogCard
        key={key}
        post={{
          ...node.node.article,
          tag_list_array: node.node.article.tag_list.split(',').map(tag => tag.trim()),
        }}
      />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allDevArticles {
      edges {
        node {
          article {
            id
            path
            cover_image
            title
            slug
            tag_list
            flare_tag {
              name
            }
            readable_publish_date
            positive_reactions_count
            comments_count
            social_image
          }
        }
      }
    }
  }
`
