// header.tsx
'use client'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          DAO<span className="text-primary">ITS</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="#services">Services</Link>
          <Link href="#cases">Cases</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </Button>
      </div>
      {open && <MobileNav onClose={() => setOpen(false)} />}
    </header>
  )
}
