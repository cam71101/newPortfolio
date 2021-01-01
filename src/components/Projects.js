import React from "react"
import Title from "../components/Title"
import Project from "../components/project"
import { makeStyles } from "@material-ui/core/styles"

// export const query = graphql`
//   {
//     allStrapiProjects(sort: { fields: Priority, order: ASC }) {
//       nodes {
//         github
//         id
//         description
//         title
//         url
//         stack {
//           id
//           title
//         }
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "calc(100vh - 5rem - 9rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem 0",
    width: "100%",
  },
  projectsContainer: {
    width: "90vw",
    maxWidth: "80rem",
    display: "flex",
    flexDirection: "column",
  },
}))

const Projects = ({ projects }) => {
  const classes = useStyles()

  return (
    <section
      className={classes.root}
      // data-sal="fade"
      // data-sal-delay="300"
      // data-sal-easing="ease"
    >
      <div className={classes.projectsContainer}>
        <Title title={"Projects"} />
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
