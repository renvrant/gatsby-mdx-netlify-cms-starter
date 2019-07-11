import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { safelyGetSiteConfig } from "../cms"

export const query = graphql`
  query {
    sitePage(path: { eq: "/config/" }) {
      context {
        frontmatter {
          menu_nav {
            text
            url
          }
        }
      }
    }
  }
`

export const Menu = () => (
  <StaticQuery
    query={query}
    render={data => {
      const menu = safelyGetSiteConfig(data.sitePage).menu_nav || []
      return (
        <ul>
          {menu.map((item, i) => (
            <li key={i}>
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      )
    }}
  />
)
