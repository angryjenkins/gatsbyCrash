import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div id="blog_post_content">
        <h1>{post.frontmatter.title}</h1>
        <p className='blog_tagline'>{post.frontmatter.tagline}</p>
        <p className='blog_date'>{post.frontmatter.date}</p>

        <div className="blog_body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        <em>by {post.frontmatter.author}</em><br />

        <small className="small_link">
          [<Link to="/blog">Back to the Blog</Link>]
        </small>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        tagline
        author
        date(formatString: "MMMM Do YYYY")
        tags
      }
    }
  }
`
