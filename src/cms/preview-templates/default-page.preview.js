import React from "react"
import { DefaultPageTemplate } from "../../templates/default-page.template"
import { CatchError } from "../../core"

export const HomePagePreview = ({ entry }) => (
  <CatchError>
    <DefaultPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
  </CatchError>
)
