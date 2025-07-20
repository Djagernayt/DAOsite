import { Hero } from '@/widgets/hero/hero'
import { Features } from '@/widgets/features/features'
import { ContactForm } from '@/features/contact-form/contact-form'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <section id="contact" className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Let’s talk</h2>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
