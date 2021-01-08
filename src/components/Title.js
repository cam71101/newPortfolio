import React from "react"

import "fontsource-rubik"

const Title = ({ title, size }) => {
  return (
    <div className="section-title">
      <h1>
        <span>{title || "default title"}</span>
      </h1>
    </div>
  )
}

export default Title
