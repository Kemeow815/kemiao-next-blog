module.exports = {
  name: '喵落阁',
  title: '克喵爱吃卤面',
  description: '愿你看清一切真相后，依旧热爱你的家人和朋友。 ',
  avatar: '/avatar.png',
  logo: '/logo.svg',
  siteUrl: 'https://myblog.kemiaofx.cn',
  // icon 请在 src/components/Profile.tsx 中修改
  links: [
    { name: 'GitHub', link: 'https://github.com/Kemeow815' },
    { name: 'X', link: 'https://twitter.com/kemiaosw' },
    { name: 'Telegram', link: 'https://t.me/KemiaoJun' },
    { name: 'Mail', link: 'mailto:me@kemiaosw.top' },
    { name: 'QQ', link: 'https://qm.qq.com/q/m8FW8Y6TkY' },
    { name: 'Bilibili', link: 'https://space.bilibili.com/3546643173477234' },
    { name: '网易云音乐', link: 'https://music.163.com/#/user/home?id=1725716511' },
    { name: 'RSS', link: '/feed.xml' },
  ],
  friends: [
    { name: '赖同学', link: 'https://www.laibh.com' },
    { name: '鯊手', link: 'https://www.cnblogs.com/Scooby' },
    { name: '戴兜', link: 'https://im.daidr.me' },
    { name: 'lufangzhou', link: 'https://zhoufanglu.github.io/vuepressBlog' },
    { name: 'wallleap', link: 'https://myblog.wallleap.cn' },
    { name: 'Song\'s Blog', link: 'https://songxwn.com' },
  ],
  // en | zh-CN
  language: 'zh-CN',
  // 侧边目录
  toc: true,
  // 显示上一篇下一篇按钮
  adjacentPosts: true,
  // 配置文章过时提醒阈值
  outdatedPostThresholdDays: 31,
  markdown: {
    // 统一配置 CodeBlock 是否显示行号，也可以在 frontmatter 中通过 lineNumbers 字段单独设置
    lineNumbers: false,
  },
  backToTopButton: true
}
