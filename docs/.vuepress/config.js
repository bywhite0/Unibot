const { defaultTheme } = require('vuepress')

module.exports = {
    locales: {
      '/': {
        lang: 'zh-CN',
      },
      '/en/': {
        lang: 'en-US',
      },
    },
    title: "Unibot使用文档",
    description: "一个多功能PJSK查询bot",
    base: "/",
    theme: defaultTheme({
      locales: {
        '/': {
          selectLanguageName: '简体中文',
        },
        '/en/': {
          selectLanguageName: 'English',
        },
      },
    repo: 'watagashi-uni/Unibot',
    docsDir: 'docs',
    docsBranch: 'main',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    selectLanguageText: 'Language',
    sidebar: 'auto',
    navbar: [
      { text: "首页", link: "/" },
      { text: "功能列表", link: "/usage/" },
      { text: "频道Bot使用指南", link: "/guild/" },
      { text: "更新日志", link: "/updatelog/" },
      { text: "实时日志", link: "/dailylog/" },
    ],
  }),
};
