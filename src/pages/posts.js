import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Style from '../styles/post.module.css';


export default ({ data }) => {

    console.clear();
    console.log(data.allWordpressPost.nodes);

    return (
        <Layout>
            <SEO title="Posts" />
            <h1>Posts</h1>
            {data.allWordpressPost.nodes.map((post, index) => {
                return (
                    <div className={Style.post}>
                        <h2>{post.title}</h2>
                        <div className="post-ecerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                        <button>Read More</button>
                    </div>
                )
            })}
        </Layout>
    )
}

export const query = graphql`
    query {
        allWordpressPost {
            nodes {
                id
                content
                excerpt
                title
            }
        }
    }
`