import React from 'react'
import Parser from 'html-react-parser'
import styled from '@emotion/styled'

import { linkBlock } from './blocks'
import Card from './Card'

const BlogPostStyle = styled.div`
  h1.title {
    margin: 0;
    font-size: calc(1.85vw + 25px);
    line-height: calc(1.85vw + 35px);
    font-weight: 500;
    a {
      text-decoration: none;
      color: black;
    }
  }

  div.body {
    h1 {
      font-size: 1.85em;
      line-height: 1.14em;
      font-weight: 400;
    }
    div.highlight pre {
      padding: 5% 5% 5% 85px;
      margin: 20px -85px;
      overflow-wrap: normal;
      overflow-x: auto;
    }
    img {
      max-width: 100%;
    }
    iframe {
      margin: 0 auto;
      display: block;
    }
  }

  @media only screen and (max-width: 420px) {
    div.body {
      div.highlight pre {
        padding: 5% 5% 5% 20px;
        margin: 20px -20px;
      }
      iframe {
        width: 100%;
      }
    }
  }
`

const BlogPost = ({ post }) => {
  const removeWrappers = html => {
    (['html', 'body']).forEach(tag => {
      html = html.replace(`<${tag}>`, '')
      html = html.replace(`</${tag}>`, '')
    })
    return html
  }
  const Content = Parser(removeWrappers(post.body_html), {
    replace: ({ attribs, children }) => {
      let content
      ([linkBlock]).some(transform => (content = transform(attribs, children)))
      return content
    },
  })
  return (
    <Card>
      <BlogPostStyle>
        <h1 className="title">
          <a href={`/${post.slug}`}>{post.title}</a>
        </h1>
        <div className="body">{Content}</div>
      </BlogPostStyle>
    </Card>
  )
}

export default BlogPost
