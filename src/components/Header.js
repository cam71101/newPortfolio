import React from "react"

import Logo from "./Logo"

export default function ButtonAppBar({ logo }) {
  return (
    <div className="header-container">
      <Logo logo={logo} />
    </div>
  )
}
