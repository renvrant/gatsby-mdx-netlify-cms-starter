export const safelyGetFmKey = (pageContext, key) =>
  safelyGetFrontMatter(pageContext)
    ? safelyGetFrontMatter(pageContext)[key]
    : null

export const safelyGetFrontMatter = pageContext =>
  pageContext && pageContext.frontmatter ? pageContext.frontmatter : {}

// General, consider moving
export const withFallback = (value, fallback) => (value ? value : fallback)

export const safelyGetSiteConfig = page =>
  page && page.context ? safelyGetFrontMatter(page.context) : {}
