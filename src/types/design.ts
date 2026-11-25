export type InvitationDesign = {
  id: string
  name: string
  slug: string
  shortDescription: string
  description: string
  theme: string
  previewImage: string
  galleryImages: DesignGalleryImage[]
  palette?: DesignColor[]
  liveDemoUrl: string
  seoTitle: string
  seoDescription: string
}

export type DesignGalleryImage = {
  src: string
  alt: string
  label: string
  width: number
  height: number
}

export type DesignColor = {
  name: string
  value: string
}
