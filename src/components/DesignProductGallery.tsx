import { useRef, useState } from 'react'
import type { TouchEvent } from 'react'
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react'
import type { DesignGalleryImage, InvitationDesign } from '../types/design'

type DesignProductGalleryProps = { design: InvitationDesign }

function DesignProductGallery({ design }: DesignProductGalleryProps) {
  const images: DesignGalleryImage[] = design.galleryImages
  const [activeIndex, setActiveIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const touchStart = useRef<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const activeImage = images[activeIndex]

  const selectImage = (index: number) => {
    setActiveIndex((index + images.length) % images.length)
  }

  const openZoom = () => {
    setIsZoomed(true)
    requestAnimationFrame(() => dialogRef.current?.showModal())
  }

  const closeZoom = () => {
    dialogRef.current?.close()
    setIsZoomed(false)
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current
    const end = event.changedTouches[0]?.clientX
    touchStart.current = null
    if (start === null || end === undefined || images.length < 2) return
    const distance = start - end
    if (Math.abs(distance) > 42) {
      event.preventDefault()
      selectImage(activeIndex + (distance > 0 ? 1 : -1))
    }
  }

  return (
    <div className="product-gallery" role="group" aria-label={`${design.name} image gallery`}>
      <div
        className={`product-gallery-stage${activeImage ? '' : ' product-gallery-stage-empty'}`}
        onTouchStart={(event) => { touchStart.current = event.changedTouches[0]?.clientX ?? null }}
        onTouchEnd={handleTouchEnd}
      >
        {activeImage ? (
          <>
            <button
              className="product-gallery-image-button"
              type="button"
              onClick={openZoom}
              aria-label={`Enlarge ${activeImage.label.toLowerCase()} preview`}
            >
              <img
                key={activeImage.src}
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width}
                height={activeImage.height}
                fetchPriority="high"
                decoding="async"
              />
            </button>
            <span className="product-gallery-label" aria-live="polite">{activeImage.label}</span>
            {images.length > 1 && (
              <div className="product-gallery-arrows" aria-label="Gallery controls">
                <button type="button" onClick={() => selectImage(activeIndex - 1)} aria-label="Previous preview">
                  <ArrowLeft size={18} aria-hidden="true" />
                </button>
                <button type="button" onClick={() => selectImage(activeIndex + 1)} aria-label="Next preview">
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            )}
            <button className="product-gallery-expand" type="button" onClick={openZoom} aria-label="View larger preview">
              <Expand size={16} aria-hidden="true" />
            </button>
          </>
        ) : (
          <div className="product-preview-coming-soon">
            <span className="eyebrow">{design.theme}</span>
            <p>{design.name}</p>
            <span>Preview coming soon</span>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="product-gallery-thumbnails" role="group" aria-label="Choose an invitation preview">
          {images.map((image, index) => (
            <button
              key={image.src}
              className="product-gallery-thumbnail"
              type="button"
              aria-label={`Show ${image.label.toLowerCase()} preview`}
              aria-pressed={activeIndex === index}
              onClick={() => selectImage(index)}
            >
              <img src={image.src} alt="" width={image.width} height={image.height} loading="lazy" decoding="async" />
              <span>{image.label}</span>
            </button>
          ))}
        </div>
      )}

      {activeImage && (
        <dialog
          ref={dialogRef}
          className="product-gallery-dialog"
          aria-label={`${design.name} enlarged preview`}
          onClose={() => setIsZoomed(false)}
          onClick={(event) => { if (event.target === dialogRef.current) closeZoom() }}
        >
          {isZoomed && (
            <div className="product-gallery-dialog-content">
              <button type="button" className="product-gallery-dialog-close" onClick={closeZoom} aria-label="Close enlarged preview">
                <X size={20} aria-hidden="true" />
              </button>
              <img src={activeImage.src} alt={activeImage.alt} width={activeImage.width} height={activeImage.height} />
              <p>{activeImage.label}</p>
            </div>
          )}
        </dialog>
      )}
    </div>
  )
}

export default DesignProductGallery
