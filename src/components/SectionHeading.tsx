type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto text-center'
      : 'text-left'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-dreamz-burgundy sm:text-xs sm:tracking-[0.25em]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-[2.35rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-dreamz-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
