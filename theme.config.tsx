import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src="/logo.svg" alt="FURY" width="40" height="40" />
      <span style={{ marginLeft: '.4em', fontWeight: 700 }}>
        FURY
      </span>
    </>
  ),
  project: {
    link: "https://github.com/deka27/fury-upgrade",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/deka27/fury-upgrade/tree/master",
  footer: {
    text: "FURY",
  },
  toc: {
    backToTop: true,
  },
  // primaryHue:360,
};

export default config;
