import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{data.allWordpressWpServices.nodes[0].title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.allWordpressWpServices.nodes[0].content }}></div>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout >
)


export const query = graphql`
  query site {
    allWordpressWpServices {
      nodes {
        content
        id
        wordpress_id
        title
      }
    }
  }
`

export default IndexPage
