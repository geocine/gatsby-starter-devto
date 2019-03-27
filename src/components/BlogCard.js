import React from 'react'

const BlogCard = ({ post }) => (
  <div className="card">
    <h1>
      <a href={`/${post.slug}`}>{post.title}</a>
    </h1>
    <div
      dangerouslySetInnerHTML={{
        __html: post.body_html,
      }}
    />
  </div>
)

export default BlogCard
