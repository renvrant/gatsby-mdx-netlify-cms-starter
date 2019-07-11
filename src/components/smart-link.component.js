import React from "react"
import { Link as GatsbyLink } from "gatsby"

/*
 * Used to dynamically swap CMS links with appropriate Gatsby links
 * Adapted from:
 * https://www.gatsbyjs.org/docs/gatsby-link/#use-link-only-for-internal-links
 */

export const SmartLink = ({ children, to, activeClassName, ...other }) => {
  // This assumes that any internal link (intended for Gatsby)
  // will start with one slash or a hash tag
  const internal = /^\/(?!\/|#)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  return internal ? (
    <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
      {children}
    </GatsbyLink>
  ) : (
    <a href={to} {...other}>
      {children}
    </a>
  )
}
