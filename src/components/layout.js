import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { MDXProvider } from '@mdx-js/tag'
import MDX from '@mdx-js/runtime'

import Header from "./header"
import Title from "./title"
import "./layout.css"

const blogComponents = {
  h1: props => <Title {...props} />,
}

const scopeComponents = {
  Title: props => <Title {...props } />
}

const FrontMatterRenderer = ({data}) => {
  if (data.sections) {
    return (
      <>
        {
          data.sections.map((section, i) => (
            <React.Fragment key={i}>
              <h2 key={`${i}-title`}>{section.title}</h2>
              <RenderSectionBody body={section.body} key={`${i}-body`} />
            </React.Fragment>
        ))}
      </>)
  }
  return null
}

const RenderSectionBody = ({body}) => (<MDX scope={scopeComponents} components={blogComponents}>{body}</MDX>)

const Layout = ({ children, pageContext }) => (
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
      console.log(data, pageContext, children)
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
            <main>{children}</main>
            <FrontMatterRenderer data={pageContext.frontmatter}/>
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
