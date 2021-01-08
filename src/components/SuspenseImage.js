import React from "react"

const SuspenseImg = ({ src, ...rest }) => {
  // todo: preload and throw somehow
  return <img alt="" src={src} {...rest} />
}
