// src/shared/ui/client-providers.tsx
'use client'

import { I18nextProvider } from 'react-i18next'
import type { i18n } from 'i18next'

export default function ClientProviders({
  i18n,
  children
}: {
  i18n: i18n
  children: React.ReactNode
}) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
