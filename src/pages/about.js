import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => {

    const info = data.allWordpressPage.nodes[0];

    return (
        <Layout>
            <SEO title={info.title} />
            <h1>{info.title}</h1>
            <main
                dangerouslySetInnerHTML={{ __html: info.content }}>
            </main>
        </Layout>
    )
}


export const query = graphql`
    query {
        allWordpressPage(filter: {wordpress_id: {eq: 6}}) {
            nodes {
                wordpress_id
                title
                content
            }
        }
    }
`