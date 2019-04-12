import React from "react"

import {
  Heading,
  CallToAction,
  SmartLink,
} from "../components"

export const CMS_SCOPE = {
  CallToAction: props => <CallToAction {...props} />,
}

export const CMS_COMPONENTS = {
  h1: props => <Heading tag={1} {...props} />,
  h2: props => <Heading tag={2} {...props} />,
  h3: props => <Heading tag={3} {...props} />,
  h4: props => <Heading tag={4} {...props} />,
  h5: props => <Heading tag={5} {...props} />,
  h6: props => <Heading tag={6} {...props} />,
  a: props => <SmartLink {...props} />,
}