import React from "react"
import OtherProject from "./OtherProject"

export default function OtherProjects({ projects }) {
 
  return (
    <div className="other-project-center">
      {projects.slice(0, 2).map(project => {
        return <OtherProject key={project.id} {...project} />
      })}
    </div>
  )
}
