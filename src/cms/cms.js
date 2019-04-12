import CMS from "netlify-cms"

import {
  HomePagePreview,
  AdminConfigPreview,
  DefaultPagePreview,
} from "./preview-templates"
import { ctaEditorConfig } from "./editor-components"

// Not reliably loaded by registerPreviewStyle, so import directly
import "../app.css"

// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("config", AdminConfigPreview)
CMS.registerPreviewTemplate("content", DefaultPagePreview)

// Extend editor
// CMS.registerEditorComponent(testimonialEditorConfig)
CMS.registerEditorComponent(ctaEditorConfig)
