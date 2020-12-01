import React from "react"

import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"
import Blog from "../components/Blog"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allStrapiBlogs {
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

const useStyles = makeStyles(theme => ({}))

const Blogs = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  const useStyles = makeStyles(theme => ({
    root: {
      minHeight: "calc(100vh - 5rem - 9rem)",
      padding: "4rem 0",
    },
  }))

  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Blog" description="Blogs" />
      <section className={classes.root}>
        <Title title="Blog"></Title>
        <div className="section-center blogs-center">
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Blogs
