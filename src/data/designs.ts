import type { InvitationDesign } from '../types/design'

export const invitationDesigns: InvitationDesign[] = [
  {
    id: 'burgundy-romance',
    name: 'Burgundy Romance',
    slug: 'burgundy-romance',
    shortDescription: 'Romantic, floral, and richly elegant.',
    description:
      'A warm burgundy wedding experience with soft florals, refined typography, and a romantic luxury feel.',
    theme: 'Romantic Luxury',
    previewImage: '/designs/burgundy-romance.png',
    galleryImages: [
      {
        src: '/designs/burgundy-romance.png',
        alt: 'Burgundy Romance opening invitation with a floral monogram',
        label: 'Opening',
        width: 423,
        height: 854,
      },
      {
        src: '/designs/burgundy-romance.jpg',
        alt: 'Burgundy Romance invitation cover with the couple’s names',
        label: 'Invitation cover',
        width: 405,
        height: 822,
      },
    ],
    palette: [
      { name: 'Muted burgundy', value: '#7C4D57' },
      { name: 'Warm ivory', value: '#F5E8DF' },
      { name: 'Garden sage', value: '#A8A68D' },
      { name: 'Deep plum', value: '#36121A' },
    ],
    liveDemoUrl: 'https://b-and-g-rosy.vercel.app/',
    seoTitle: 'Burgundy Wedding Invitation Design | DreamZ',
    seoDescription:
      'Explore the Burgundy Romance digital wedding invitation by DreamZ, designed for romantic and elegant weddings.',
  },
  {
    id: 'timeless-ivory',
    name: 'Timeless Ivory',
    slug: 'timeless-ivory',
    shortDescription: 'Minimal, classic, and refined.',
    description:
      'A clean ivory wedding experience focused on elegant typography, generous spacing, and timeless simplicity.',
    theme: 'Classic Minimal',
    previewImage: '/designs/timeless-ivory.png',
    galleryImages: [
      {
        src: '/designs/timeless-ivory.png',
        alt: 'Timeless Ivory invitation cover with gold botanical details',
        label: 'Invitation cover',
        width: 423,
        height: 854,
      },
    ],
    palette: [
      { name: 'Ivory', value: '#DDD2BC' },
      { name: 'Antique gold', value: '#B69A68' },
      { name: 'Burgundy', value: '#471721' },
    ],
    liveDemoUrl: 'https://timeless-ivory.vercel.app/',
    seoTitle: 'Ivory Wedding Invitation Design | DreamZ',
    seoDescription:
      'Explore the Timeless Ivory digital wedding invitation by DreamZ, designed for classic and elegant weddings.',
  },
  {
    id: 'sage-garden',
    name: 'Sage Garden',
    slug: 'sage-garden',
    shortDescription: 'Soft, natural, and garden-inspired.',
    description:
      'A calm sage wedding experience with natural tones, light botanical details, and a modern romantic atmosphere.',
    theme: 'Garden Modern',
    previewImage: '',
    galleryImages: [],
    liveDemoUrl: '',
    seoTitle: 'Sage Green Wedding Invitation Design | DreamZ',
    seoDescription:
      'Explore the Sage Garden digital wedding invitation by DreamZ, designed for soft, natural, and modern weddings.',
  },
]
