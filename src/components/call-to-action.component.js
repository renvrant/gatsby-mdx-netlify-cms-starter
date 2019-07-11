import React from "react"
import PropTypes from "prop-types"

import { SmartLink } from "./smart-link.component"

export const CallToAction = ({ url, children, align, bgColor, ...other }) => {
  const style = {
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    padding: "1.5em 2.5em",
    backgroundColor: bgColor ? bgColor : "rebeccaPurple",
    color: "white",
  }
  const link = (
    <SmartLink to={url} style={style} {...other}>
      {children}
    </SmartLink>
  )

  return align === "center" ? (
    <span style={{ display: "flex", justifyContent: "center" }}>{link}</span>
  ) : (
    link
  )
}

CallToAction.propTypes = {
  url: PropTypes.string.isRequired,
  align: PropTypes.string,
}
