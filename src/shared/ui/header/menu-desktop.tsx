'use client'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'


export function DesktopMenu({ pathname, dark }: { pathname: string; dark: boolean }) {
  const { t }           = useTranslation()     
  const link = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={`font-light hover:opacity-80 ${
        pathname === href ? 'text-primary' : dark ? 'text-white' : 'text-black'
      }`}
    >
      {label}
    </Link>
  )
  return (
    <nav className="ml-20 hidden gap-12 lg:flex">
      {link('/decentral', t('top_menu_decentralization'))}
      {link('/app-development', 'AppDev')}
      {link('/our-development', t('index_footer_link3'))}
      {link('/blockchain', t('top_menu_blockchain'))}
      {link('/invest', t('top_menu_investors'))}
      {link('/statistics', t('top_menu_statistic'))}
    </nav>
  )
}
