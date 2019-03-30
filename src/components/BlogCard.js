import React from 'react'

import styled from '@emotion/styled'

const BlogCardStyle = styled.div`
  background: white;
  background: var(--theme-container-background, #fff);
  margin: 68px auto 20px;
  text-align: left;
  box-shadow: 3px 3px 0px #bababa;
  box-shadow: var(--theme-container-box-shadow, 3px 3px 0px #bababa);
  border-radius: 3px;
  max-width: 800px;
  width: auto;
  padding: 50px 85px;

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
    a > img {
      width: 100%;
    }
    iframe {
      margin: 0 auto;
      display: block;
    }
  }

  @media only screen and (max-width: 420px) {
    padding: 50px 50px 50px 20px;
    margin: 0 auto 50px;
    div.body {
      div.highlight pre {
        margin: 20px -20px;
      }
      iframe {
        width: 100%;
      }
    }
  }
`

const BlogCard = ({ post }) => (
  <BlogCardStyle>
    <h1 className="title">
      <a href={`/${post.slug}`}>{post.title}</a>
    </h1>
    <div
      className="body"
      dangerouslySetInnerHTML={{
        __html: post.body_html,
      }}
    />
  </BlogCardStyle>
)

export default BlogCard
