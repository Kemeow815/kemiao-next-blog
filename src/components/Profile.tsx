import React from 'react'
import config from 'config'
import Image from 'next/image'
import { GitHub, Juejin, RSS, X , Telegram, Mail, QQ, Bilibili, NeteaseCloudMusic} from './icons'

const links: { name: string; link: string }[] = config.links

// prettier-ignore
const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  'GitHub': <GitHub className="text-xl" aria-hidden />,
  'X': <X className="text-xl" aria-hidden />,
  '稀土掘金': <Juejin className="text-xl" aria-hidden />,
  'RSS': <RSS className="text-xl" aria-hidden />,
  'Telegram': <Telegram className="text-xl" aria-hidden />,
  'Mail': <Mail className="text-xl" aria-hidden />,
  'QQ': <QQ className="text-xl" aria-hidden />,
  'Bilibili': <Bilibili className="text-xl" aria-hidden />,
  '网易云音乐': <NeteaseCloudMusic className="text-xl" aria-hidden />
}

const Profile = () => {
  return (
    <div className="relative my-12 sm:my-16">
      <div className="flex items-center">
        {config.avatar && (
          <div className="relative flex-shrink-0">
            <Image
              className="object-cover rounded-full p-1 bg-white dark:bg-zinc-900 ring-2 ring-zinc-400/20 shadow-lg dark:shadow-none shadow-zinc-600/10"
              src={config.avatar}
              alt="avatar"
              width={80}
              height={80}
              unoptimized
              priority
            />
          </div>
        )}
        <div className="ml-6">
          <h1 className="w-fit text-3xl font-medium text-primary bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {config.title}
          </h1>
          <span className="inline-block mt-3 text-zinc-500">{config.description}</span>
          <div className="flex items-center -mx-2 mt-1">
            {links.map(({ name, link }) => (
              <a
                key={link}
                className="inline p-2 rounded-full text-2xl transition-opacity opacity-50 hover:opacity-100"
                href={link}
                target="_blank"
                title={name}
                aria-label={name}
              >
                {SOCIAL_ICONS[name]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
