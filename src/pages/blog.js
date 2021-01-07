import React from "react"

import Layout from "../components/Layout"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({ data }) => {
  return (
    <Layout>
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
  }
`

export default Blog
