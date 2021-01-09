import React from "react"

import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({ data }) => {
  return (
    <Layout logoFixed={data.about.nodes[0].logo.childImageSharp.fixed}>
      <SEO title="Blog" description="Blogs" />
      <section className="blog-page">
        <Blogs data={data} title="blog" page />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        id
        date(formatString: "MMMM Do, YYYY")
        title
        category
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    about: allStrapiAbout {
      nodes {
        logo {
          id
          childImageSharp {
            fluid(quality: 50) {
              ...GatsbyImageSharpFluid_noBase64
            }
            fixed(width: 130) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
          publicURL
        }
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default Blog
