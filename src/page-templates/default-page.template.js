import React from "react"
import { MDXProvider } from '@mdx-js/tag'

import { 
  safelyGetFrontMatter,
  CMS_COMPONENTS,
  CMS_SCOPE,
} from "../cms"
import { SEO } from '../components'
import { RenderMarkdown } from '../core'

const DefaultPage = ({ pageContext, children }) => {
  const { title, body } = safelyGetFrontMatter(pageContext)
  return (
    <article>
      <SEO title={title} />
      <h2>{title}</h2>
      <RenderMarkdown md={body} components={CMS_COMPONENTS} scope={CMS_SCOPE} />
      {/* Include children to support any normal MDX files in the project */ }
      <MDXProvider components={{...CMS_COMPONENTS, ...CMS_SCOPE}}>
        {children}
      </MDXProvider>
    </article>
  )
}

export default DefaultPage
