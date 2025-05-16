import React from 'react'
import Link from 'next/link'
import DesktopOnly from '@/components/DesktopOnly'
import { ArrowRight } from '@/components/icons'

const projects = [
  {
    name: 'kemiao-next-blog',
    desc: '基于作者博客的二改源码',
    url: 'https://github.com/Kemeow815/kemiao-next-blog',
  },
  {
    name: 'Ke Miao Music',
    desc: '基于 Heo Music 的音乐播放器',
    url: 'https://github.com/Kemeow815/HeoMusic',
  },
  {
    name: '喵落阁',
    desc: '纸鹿分享的nuxt3的全栈博客',
    url: 'https://github.com/Kemeow815/blog-v3',
  },
  {
    name: '克喵分享的仓库',
    desc: '保存我分享的资源的仓库',
    url: 'https://github.com/Kemeow815/kemiaofx',
  },
  {
    name: '克喵的网页影视播放器',
    desc: '一键部署的影视站',
    url: 'https://github.com/Kemeow815/LibreTV-kemiao',
  },
  {
    name: '克喵的网站监控页',
    desc: '优雅的站点状态监控面板',
    url: 'https://github.com/Kemeow815/Uptime-Status-kemiao',
  },
  {
    name: '克喵的今日热榜',
    desc: 'Elegant reading of real-time and hottest news',
    url: 'https://github.com/Kemeow815/kemiao-news',
  },
  {
    name: '克喵的动态说说',
    desc: '基于TG频道的动态说说',
    url: 'https://github.com/Kemeow815/BroadcastChannel',
  },
]

const Projects = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 -mx-3 sm:-mx-4 mt-8">
      {projects.map(project => (
        <Link
          className="group relative flex flex-col p-3 sm:p-4 gap-1.5 rounded-xl sm:hover:bg-zinc-400/10 transition-colors"
          key={project.name}
          href={project.url}
          target="_blank"
        >
          <h3 className="font-medium">{project.name}</h3>
          <span className="text-zinc-400 dark:text-zinc-500">{project.desc}</span>
          <DesktopOnly>
            <ArrowRight className="absolute right-2.5 bottom-2.5 text-zinc-300 dark:text-zinc-600 -rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
          </DesktopOnly>
        </Link>
      ))}
    </div>
  )
}

export default Projects
