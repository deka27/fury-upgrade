import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>FURY</span>,
  project: {
    link: 'https://github.com/deka27/fury-upgrade',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/deka27/fury-upgrade/tree/master',
  footer: {
    text: 'FURY',
  },
  toc: {
    backToTop: true
  }

}

export default config
