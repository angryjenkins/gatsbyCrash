import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the site!</h1>
    <p>
      This is the future home of{' '}
      <span className="angryjenkins">angryjenkins</span>&trade;, under
      construction.
    </p>
    <p>
      In the meantime, feel free to check out the <Link to="/blog">blog</Link>.
    </p>
  </Layout>
)

export default IndexPage
