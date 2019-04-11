import React from "react"

import HomePage from "./home-page.template"
import DefaultPage from "./default-page.template"
import NotFoundPage from "./not-found.template"
import { AppLayout } from "../app-layout.component"
import { safelyGetFrontMatter } from "../cms"

const componentTemplateMap = {
  "home-page": HomePage,
  "hidden-page": NotFoundPage,
}

const CMSTemplate = props => {
  const { pageContext } = props
  const { templateKey } = safelyGetFrontMatter(pageContext)
  const Page = componentTemplateMap[templateKey]
  return (
    <AppLayout>
      {Page ? <Page {...props} /> : <DefaultPage {...props} />}
    </AppLayout>
  )
}

export default CMSTemplate
