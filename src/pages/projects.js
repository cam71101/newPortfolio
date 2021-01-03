import React from "react"
import Title from "../components/Title"
import Project from "../components/Project"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: Priority, order: ASC }) {
      nodes {
        github
        id
        description
        title
        url
        stack {
          id
          title
        }
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
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "calc(100vh - 5rem - 9rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem 0",
  },
  projectsContainer: {
    width: "90vw",
    maxWidth: "80rem",
    display: "flex",
    flexDirection: "column",
  },
}))

const Projects = ({ data }) => {
  const classes = useStyles()
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Projects" description="Projects page" />
      <section className={classes.root}>
        <Title title={"Projects"} />
        <div className={classes.projectsContainer}>
          {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
