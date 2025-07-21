'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { Mail, Send, Sun, Moon, Menu } from 'lucide-react'

import { LangToggle } from '@/shared/ui/lang-toggle/lang-toggle'
import { useThemeStore } from '@/shared/lib/theme-store'
import { DesktopMenu } from './menu-desktop'
import { MobileMenu } from './menu-mobile'

import { useState, useEffect } from 'react'

export function Header() {
  const { t }           = useTranslation()     
  const pathname        = usePathname()
  const { dark, toggle} = useThemeStore()

  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* вычисляем фон: голубой (feonyx) | чёрный | белый */
  const themeClass = (() => {
    if (pathname.startsWith('/feonyx-blockchain')) return 'bg-primary/90 text-white'
    if (
      pathname.startsWith('/analysis')   ||
      pathname.startsWith('/decentral')  ||
      pathname.startsWith('/blockchain')
    )
      return dark ? 'bg-[#080A12]/90 text-white' : 'bg-white/90'
    return dark ? 'bg-[#080A12]/90 text-white'    : 'bg-white/90'
  })()

  /* ===== render ===== */
  return (
    <>
      {/* top bar (desktop) */}
      <div className={`hidden lg:block ${dark ? 'bg-[#080A12]' : 'bg-white'}`}>
        <div className="container flex items-center justify-between py-2 text-sm text-muted-foreground">
          <a href="mailto:daoitscom@gmail.com" className="flex items-center gap-2">
            <Mail size={16} /> daoitscom@gmail.com
          </a>

          <div className="flex items-center gap-4">
            <button onClick={toggle}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <a href="https://t.me/ITSystemadm" aria-label="telegram"><Send size={18} /></a>

            {/* переключатель языка */}
            <LangToggle />                                                   {/* :contentReference[oaicite:1]{index=1} */}

            {/* CTA */}
            <Link href="#contact" className="rounded bg-primary px-3 py-1 text-white hover:bg-primary/80">
              {t('index_quest_btn')}
            </Link>
          </div>
        </div>
      </div>

      {/* main bar */}
      <header
        className={`${themeClass} backdrop-blur supports-[backdrop-filter]:bg-opacity-90 fixed inset-x-0 z-50 transition-all ${
          scrolled ? 'top-0' : 'top-16 lg:top-16'
        }`}
      >
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="font-black text-3xl lg:text-5xl tracking-tight text-primary" translate="no">ITS</Link>

          <DesktopMenu pathname={pathname} dark={dark} />

          {/* burger */}
          <button onClick={() => setOpen(true)} className="lg:hidden"><Menu size={32} /></button>
        </div>
      </header>

      {/* mobile overlay */}
      <MobileMenu open={open} onClose={() => setOpen(false)} pathname={pathname} t={t} dark={dark} />
    </>
  )
}
