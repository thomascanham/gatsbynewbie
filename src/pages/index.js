import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({ data }) => {
  const { acf } = data.allWordpressPage.edges[0].node;
  const { title } = data.allWordpressPage.edges[0].node;

  return (
    <Layout>
      <SEO title={title} />
      <h1>{acf.main_heading}</h1>
      <p>{acf.welcome_text}</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout >
  )
}


export const query = graphql`
  query {
    allWordpressPage(filter: {wordpress_id: {eq: 5}}) {
      edges {
        node {
          id
          title
          wordpress_id
          acf {
            main_heading
            welcome_text
          }
        }
      }
    }
  }
`

export default IndexPage
