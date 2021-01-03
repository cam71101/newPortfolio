import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faReact, faItunes } from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@iconify/react"
import materialUi from "@iconify-icons/logos/material-ui"

const IconComp = ({ title }) => {
  const react = (
    <div className="icon-container">
      <FontAwesomeIcon icon={faReact} size="4x" className="react" spin />
      <p>ReactJS</p>
    </div>
  )

  const material = (
    <div className="icon-container">
      <Icon icon={materialUi} className="material" />
      <p>Material Ui </p>
    </div>
  )

  const itunes = (
    <div className="icon-container">
      <FontAwesomeIcon icon={faItunes} size="4x" className="itunes" />
      <p>Itunes API</p>
    </div>
  )

  let icon = null

  if (title === "itunes") {
    icon = itunes
  } else if (title === "material") {
    icon = material
  } else if (title === "react") {
    icon = react
  }

  return <React.Fragment>{icon}</React.Fragment>
}

export default IconComp
