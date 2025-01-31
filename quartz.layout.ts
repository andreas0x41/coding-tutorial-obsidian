import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "andreas0x41/coding-tutorial-obsidian",
        // from data-repo-id
        repoId: "R_kgDONo2oyg",
        // from data-category
        category: "Announcements",
        // from data-category-id
        categoryId: "DIC_kwDONo2oys4CmK9U",
      },
    }),
  ],
  footer: Component.Footer({
    links: {
      "Andreas Patuzzi": "https://linktr.ee/andreas0x41",
      "AIAT College": "https://linktr.ee/aiat.general",
      Quartz: "https://github.com/jackyzha0/quartz",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
    Component.DesktopOnly(Component.Backlinks()),
  ],
  right: [Component.Graph(), Component.TableOfContents()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [Component.Graph()],
}
