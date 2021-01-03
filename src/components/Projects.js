import React from "react"
import Title from "../components/Title"
import Project from "./Project"

const Projects = ({ projects }) => {
  return (
    <section className="projects">
      <Title title={"Projects"} size />
      <div className="projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
