import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Latest Posts:</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>

          <hr />

          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <br />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            date
            path
            tags
            title
          }
          excerpt
          id
        }
      }
    }
  }
`

export default BlogPage
