<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's default starter
</h1>

## Notes on the blog

Here are the npm  plugins you need to build a markdown blog:

1. `gatsby-source-filesystem`
   1. work with data from our computer's file system
2. `gatsby-transformer-remark`
   1. transform markdown files into HTML for rendering
3. `gatsby-plugin-catch-links`
   1. intercept links to avoid browser having to refresh

Once installed, configure the plugins.

s
Add to `gatsby-config.js`:

```js
`gatsby-plugin-catch-links`,
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/src/pages/blog`,
    name: 'blog'
  }
},
'gatsby-transformer-remark'
```