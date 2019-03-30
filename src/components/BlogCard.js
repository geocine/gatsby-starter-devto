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
      width: 111%;
      margin-left: -11%;
      padding-left: 9%;
      padding-right: 2%;
      padding-top: 6%;
      padding-bottom: 6%;
      overflow-wrap: normal;
      overflow-x: auto;
    }
    img {
      width: 100%;
    }
    iframe {
      margin: 0 auto;
      display: block;
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 50px 20px;
    div.body {
      div.highlight pre {
        margin-left: -7%;
        padding-left: 0%;
        padding-right: 2%;
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
