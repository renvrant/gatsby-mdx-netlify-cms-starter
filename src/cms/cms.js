import CMS from "netlify-cms-app"

import { HomePagePreview, DefaultPagePreview } from "./preview-templates"
import { ctaEditorConfig } from "./editor-components"

// Not reliably loaded by registerPreviewStyle, so import directly
import "../app.css"

// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("content", DefaultPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
