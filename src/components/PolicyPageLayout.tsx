import type { ReactNode } from 'react'
import Container from './Container'

type PolicyPageLayoutProps = {
  eyebrow: string
  title: string
  introduction: string
  children: ReactNode
}

export function PolicyPageLayout({ eyebrow, title, introduction, children }: PolicyPageLayoutProps) {
  return (
    <main className="py-12 sm:py-20 lg:py-24">
      <Container>
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">{eyebrow}</p>
            <h1 className="mt-4 font-display text-[2.6rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-6xl">{title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dreamz-muted">{introduction}</p>
            <p className="mt-4 text-sm text-dreamz-muted">Effective September 1, 2026</p>
          </header>
          <div className="mt-14 space-y-10 border-t border-black/10 pt-10 sm:mt-16 sm:space-y-12 sm:pt-12">{children}</div>
        </article>
      </Container>
    </main>
  )
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-3xl font-medium leading-tight text-dreamz-charcoal sm:text-4xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-dreamz-muted">{children}</div>
    </section>
  )
}
