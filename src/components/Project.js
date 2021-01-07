import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

import posed from "react-pose"

const Project = ({ description, title, image, link }) => {
  const Box = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
    },
  })

  return (
    <section
      className="project"
      data-sal="slide-down"
      data-sal-delay="100"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <Link to={"/" + link}>
        <Box>
          <Image fluid={image.childImageSharp.fluid} className="project-img" />
        </Box>
      </Link>
      <div className="project-info">
        <h3>{title || "default title"}</h3>
        <p className="project-description">{description}</p>
        <Link to={"/" + link}>
          <div className="project-links">Learn more > &nbsp;</div>
        </Link>
      </div>
    </section>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
