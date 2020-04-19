import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div id="blog">
        <h1>Blog Posts</h1>

        {data.allMarkdownRemark.edges.map(post => (
          <div className="blog_preview" key={post.node.id}>
            {post.node.frontmatter.date}
            <h3 class="blog_title">
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <h4 className="blog_tagline">{post.node.frontmatter.tagline}</h4>
            <p className="blog_credit">
              by {post.node.frontmatter.author} on {post.node.frontmatter.date}
            </p>

            {post.node.frontmatter.tags.map(tag => (
              <span className="blog_tag" key={tag.id}>
                {tag}
              </span>
            ))}

            <p className="small_link">
              [
              <Link className="small_link" to={post.node.frontmatter.path}>
                Read More
              </Link>
              ]
            </p>
            <hr />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            author
            date(formatString: "MMMM Do, YYYY")
            path
            tags
            title
            tagline
          }
          excerpt
          id
        }
      }
    }
  }
`

export default BlogPage
