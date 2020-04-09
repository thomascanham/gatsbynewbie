import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Style from '../styles/post.module.css';


export default ({ data }) => {

    console.clear();
    const { edges } = data.allWordpressPost;

    console.log(edges);

    return (
        <Layout>
            <SEO title="Posts" />
            <h1>Posts</h1>

            {
                edges ? edges.map(post => {
                    const { excerpt, id, title } = post.node;
                    const img = post.node.featured_media;

                    return (
                        <div className={Style.post} key={id}>
                            <h2>{title}</h2>
                            {img ? <img src={img.source_url} /> : ''}
                            <div className="postExcerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                            <button>Read More</button>
                        </div>
                    )
                }) : <h2>There are no posts to display </h2>
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allWordpressPost(sort: {order: DESC, fields: modified}, limit: 5) {
            edges {
                node {
                    id
                    title
                    excerpt
                    featured_media {
                        media_type
                        source_url
                    }
                }
            }
        }
    }
`