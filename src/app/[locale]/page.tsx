import Hero from '@/features/hero/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ITS | DAO',
  description: 'Decentralized solutions & analytics'
}

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <section id="contact" className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Let’s talk</h2>
        </div>
      </section>
    </>
  )
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }]
}