import { ArrowUpRight } from 'lucide-react'
import type { InvitationDesign } from '../types/design'
import { Link } from 'react-router'

type DesignCardProps = {
  design: InvitationDesign
}

function DesignCard({ design }: DesignCardProps) {

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-black/5 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex min-h-[23rem] items-center justify-center overflow-hidden bg-dreamz-cream p-4 sm:min-h-[28rem]">
        {design.previewImage ? (
          <img
              src={design.previewImage}
              alt={`${design.name} digital wedding invitation preview`}
              loading="lazy"
              decoding="async"
              className="block h-auto max-h-[32rem] w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
        ) : (
          <div className="flex h-full items-center justify-center px-8 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
                {design.theme}
              </p>

              <p className="mt-4 font-display text-4xl text-dreamz-charcoal">
                {design.name}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dreamz-burgundy">
          {design.theme}
        </p>

        <h2 className="mt-2 font-display text-3xl font-medium text-dreamz-charcoal">
          {design.name}
        </h2>

        <p className="mt-3 leading-7 text-dreamz-muted">
          {design.shortDescription}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
          <Link
              to={`/designs/${design.slug}`}
              aria-label={`Explore ${design.name} wedding invitation design`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-dreamz-burgundy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dreamz-burgundy-dark"
            >
              Explore Design
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

          {design.liveDemoUrl && (
            <a
              href={design.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-dreamz-burgundy px-5 py-2.5 text-sm font-semibold text-dreamz-burgundy transition-colors hover:bg-dreamz-burgundy hover:text-white"
            >
              View Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default DesignCard
