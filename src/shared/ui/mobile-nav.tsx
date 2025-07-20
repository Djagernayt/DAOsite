// mobile-nav.tsx
import Link from 'next/link'

export function MobileNav({ onClose }: { onClose(): void }) {
  return (
    <div className="md:hidden bg-background border-b px-4 pb-4">
      {['services', 'cases', 'contact'].map((id) => (
        <Link
          key={id}
          href={`#${id}`}
          className="block py-2"
          onClick={onClose}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </Link>
      ))}
    </div>
  )
}
