import React from "react"

import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"
import Blog from "../components/Blog"
import SEO from "../components/SEO"

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

const Blogs = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  const useStyles = makeStyles(theme => ({
    rootBlogs: {
      minHeight: "calc(100vh - 5rem - 9rem)",
      padding: "4rem 0",
    },
    blogContainer: {
      width: "90vw",
      margin: "0 auto",
      maxWidth: "80rem",
      marginTop: "3rem",
      [theme.breakpoints.up("sm")]: {
        width: "95vw",
        display: "grid",
        gridTemplateColumns: "repeat( auto-fill, minmax(368px, 1fr))",
        rowGap: "2rem",
        columnGap: "2rem",
      },
    },
    blog: {
      marginBottom: "2rem",
    },
  }))

  const classes = useStyles()

  // "section-center blogs-center"

  return (
    <Layout>
      <SEO title="Blog" description="Blogs" />
      <section className={classes.rootBlogs}>
        <Title title="Blog"></Title>
        <div className={classes.blogContainer}>
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Blogs
