import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Markdown from "markdown-to-jsx"
import { Typography } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/core/styles"

import SEO from "../components/SEO"

const styles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
  },
  containter: {
    width: "90vw",
    maxWidth: "80rem",
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
        gutterBottom: true,
        variant: "h2",
        align: "center",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h4", align: "center" },
    },
    p: {
      component: Typography,
      props: { paragraph: true, variant: "subtitle1" },
    },
    // li: {
    //   component: withStyles(styles)(({ classes, ...props }) => (
    //     <li className={classes.listItem}>
    //       <Typography component="span" {...props} />
    //     </li>
    //   )),
    // },
  },
}

const BlogPage = ({ data }) => {
  const { content, title, desc } = data.blog
  const classes = styles()

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className={classes.root}>
        <div className={classes.containter}>
          <article>
            <Markdown options={options}>{content}</Markdown>
          </article>
          <Link to="/blogs"> blog</Link>
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
    }
  }
`

export default BlogPage
