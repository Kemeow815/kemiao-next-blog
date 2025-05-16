import React from 'react'
import Profile from '@/components/Profile'
import useTranslation from '@/hooks/useTranslation'
import Link from 'next/link'
import LatestPosts from "@/app/LatestPosts";
import Projects from './Projects'

// export const revalidate = 86400

const Title: React.FC<{ text: string }> = props => {
  const { text } = props

  return <h2 className="flex items-center justify-between mt-16 text-2xl font-bold">{text}</h2>
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div className="prose-container">
        <Profile />
        <p className="mt-4 break-words leading-loose">
          你好 👋，我叫<strong>克喵爱吃卤面</strong>，大二双非二本学生，现在南京就读，自动化专业的普通人。
        </p>
        <p className="mt-4 break-words leading-loose">
          于<strong>2023年</strong>在<strong>小绿书</strong>接触逆向，年底进入<strong>电报</strong>，在大佬<a href="https://t.me/haoruanfenxiang" target="_blank" rel="noopener noreferrer">@haoruanfenxiang</a>
          等的吸引下，搭建了自己的资源分享<a href="https://t.me/kemiaofx_me" target="_blank" rel="noopener noreferrer">频道</a>和<a href="https://github.com/Kemeow815/kemiaofx" target="_blank" rel="noopener noreferrer">仓库</a>，
          分享我遇到的好用的资源、网站、教程等等。如果侵犯了您的权益，请联系我删除，万分感谢。
        </p>
        <p className="mt-4 break-words leading-loose">
          后于<strong>24年11月</strong>接触博客，最初的启迪来源于无意间逛频道碰到的<a href="https://memo.miantiao.me" target="_blank" rel="noopener noreferrer">面条</a>的<a href="https://github.com/ccbikai/BroadcastChannel" target="_blank" rel="noopener noreferrer">博客源码仓库</a>，搭建了我的第一个博客。
          从<code>24年11月~今</code>，陆陆续续尝试了许多的博客框架，如: Hexo、Hugo、astro、nextjs、vuepress、vitepress、nuxt3等等，在逛友链的时候看到了这个博客，觉得不错，便搭建了它。
        </p>
        <Title text={t('home-page.posts.title')} />
        <LatestPosts />
        <div className="text-center mt-6">
          <Link
            className="inline-flex items-center justify-center gap-1 font-medium text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
            href="/posts"
          >
            {t('home-page.posts.view-all')}
          </Link>
        </div>
        <Title text={t('home-page.projects.title')} />
        <Projects />
        <div className="text-center mt-6">
          <Link
            className="inline-flex items-center justify-center gap-1 text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
            href="https://github.com/Kemeow815?tab=repositories&sort=stargazers"
          >
            {t('home-page.projects.view-all')}
          </Link>
        </div>
      </div>
    </>
  )
}
