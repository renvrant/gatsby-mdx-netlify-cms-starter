import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Header from "./header"
import Title from "./title"
import "./layout.css"

const blogComponents = {
  h1: props => <Title {...props} />,
}

const FrontMatterRenderer = ({data}) => {
  if (data.sections) {
    return (
      <>
        {data.sections.map(section => (
          <MDXRenderer>{section.body}</MDXRenderer>
      ))}
      </>
    );
  }
  return null;
}

const Layout = (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      console.log(data, props)
      return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <MDXProvider components={blogComponents}>
            <main>{props.children}</main>
          </MDXProvider>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
    }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
