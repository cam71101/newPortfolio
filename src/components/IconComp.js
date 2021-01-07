import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faReact,
  faItunes,
  faSass,
  faJsSquare,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons"

import { Icon } from "@iconify/react"
import materialUi from "@iconify-icons/logos/material-ui"
import Firebase from "../assets/logos/firebase.inline.svg"
import OpenWeather from "../assets/logos/OpenWeather-Logo.jpg"

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

  const firebase = (
    <div>
      <Firebase className="firebase" />
    </div>
  )

  const sass = (
    <div className="icon-container">
      <FontAwesomeIcon icon={faSass} size="4x" className="sass" />
      <p>Sass</p>
    </div>
  )

  const weather = (
    <div>
      <img src={OpenWeather} className="weather" />
    </div>
  )

  const javascript = (
    <div className="icon-container">
      <FontAwesomeIcon icon={faJsSquare} size="4x" className="javascript" />
      <p>javascript ES6</p>
    </div>
  )

  const css = (
    <div className="icon-container">
      <FontAwesomeIcon icon={faCss3Alt} size="4x" className="css" />
      <p>CSS3</p>
    </div>
  )

  const html = (
    <div className="icon-container">
      <FontAwesomeIcon icon={faHtml5} size="4x" className="html" />
      <p>CSS3</p>
    </div>
  )

  let icon = null

  if (title === "itunes") {
    icon = itunes
  } else if (title === "material") {
    icon = material
  } else if (title === "react") {
    icon = react
  } else if (title === "firebase") {
    icon = firebase
  } else if (title === "sass") {
    icon = sass
  } else if (title === "weather") {
    icon = weather
  } else if (title === "javascript") {
    icon = javascript
  } else if (title === "css") {
    icon = css
  } else if (title === "html") {
    icon = html
  }

  return <React.Fragment>{icon}</React.Fragment>
}

export default IconComp
