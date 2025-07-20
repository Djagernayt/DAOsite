'use client'
import Link from 'next/link'
import { X } from 'lucide-react'

interface Props {
  open: boolean
  onClose(): void
  pathname: string
  t: (k: string) => string
  dark: boolean
}

export function MobileMenu({ open, onClose, pathname, t, dark }: Props) {
  const items = [
    ['/', 'Главная'],
    ['/decentral', t('top_menu_decentralization')],
    ['/app-development', 'AppDev'],
    ['/our-development', t('index_footer_link3')],
    ['/blockchain', t('top_menu_blockchain')],
    ['/invest', t('top_menu_investors')],
    ['/statistics', t('top_menu_statistic')],
  ]

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />
      {/* panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-2/3 max-w-xs transform bg-black/80 backdrop-blur transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={onClose} className="absolute right-4 top-4 text-white">
          <X size={28} />
        </button>
        <nav className="mt-16 flex flex-col gap-4 px-6">
          {items.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`text-lg ${
                pathname === href ? 'text-primary' : 'text-white'
              } hover:opacity-80`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
