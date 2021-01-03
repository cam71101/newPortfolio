import React from "react"

import "fontsource-rubik"

const Title = ({ title, size }) => {
  return (
    <div
      className="section-title"
      data-sal="fade"
      data-sal-delay="350"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <h1>
        <span>{title || "default title"}</span>
      </h1>
    </div>
  )
}

export default Title
