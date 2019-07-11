import React from "react"
import { MDXProvider } from "@mdx-js/tag"

import {
  safelyGetFrontMatter,
  withFallback,
  CMS_COMPONENTS,
  CMS_SCOPE,
} from "../cms"
import { SEO, Heading } from "../components"
import { RenderMarkdown } from "../core"

export const DefaultPageTemplate = ({ title, body, children }) => {
  return (
    <article>
      <SEO title={withFallback(title, "")} />
      <Heading tag={1}>{title}</Heading>
      {/* If children should be used instead of body, body will be empty, so it's safe to have both */}
      <RenderMarkdown md={body} components={CMS_COMPONENTS} scope={CMS_SCOPE} />
      {/* Include children to support any normal MDX files in the project */}
      {/* Combining Scope and Components in MDXProvider is an upcoming gatsby-mdx feature */}
      <MDXProvider components={{ ...CMS_COMPONENTS, ...CMS_SCOPE }}>
        {children}
      </MDXProvider>
    </article>
  )
}

const DefaultPage = ({ pageContext, ...props }) => {
  return (
    <DefaultPageTemplate
      {...safelyGetFrontMatter(pageContext)}
      {...props}
      isPreview={false}
    />
  )
}

export default DefaultPage
