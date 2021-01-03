import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Markdown from "markdown-to-jsx"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"

import SEO from "../components/SEO"

const styles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
  },
  containter: {
    width: "90vw",
    maxWidth: "40rem",
  },
  listItem: {
    marginTop: theme.spacing(1),
  },
  test: {
    textAlign: "center",
  },
}))

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: "h2",
        align: "center",
      },
    },
    h2: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h5",
        align: "center",
        color: "secondary",
      },
    },
    h5: {
      component: Typography,
      props: { variant: "h5" },
    },
    p: {
      component: Typography,
      props: { paragraph: true, variant: "subtitle1" },
    },
    img: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%",
    },
  },
  namedCodesToUnicode: {
    le: "\u2264",
    ge: "\u2265",
  },
}

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
            {/* <ReactMarkdow
              plugins={[gfm]}
              children={content}
              className={options}
            /> */}
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
