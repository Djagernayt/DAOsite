const items = [
  {
    title: 'Audit‑driven code',
    desc: 'Smart‑contracts reviewed by top‑tier auditors.',
    icon: 'ShieldCheck',
  },
  { title: 'Modular design', desc: 'Easily plug new voting modules.' },
  { title: 'Realtime dashboards', desc: 'On‑chain metrics at a glance.' },
]

export function Features() {
  return (
    <section id="services" className="bg-muted/20 py-20">
      <div className="container grid gap-12 md:grid-cols-3">
        {items.map(({ title, desc }) => (
          <div key={title}>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
