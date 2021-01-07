import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Markdown from "markdown-to-jsx"

import SEO from "../components/SEO"

const BlogPage = ({ data, location }) => {
  const { content, title, subtitle } = data.blog
  return (
    <Layout>
      <SEO title={title} description={subtitle} pathname={location.pathname} />
      <section className="blog-template">
        <div className="section-center-blog">
          <article className="blog-content">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <Markdown>{content}</Markdown>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      subtitle
      image {
        childImageSharp {
          resize(width: 1200) {
            src
            height
            width
          }
        }
      }
    }
  }
`

export default BlogPage
