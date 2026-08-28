import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  ssr: false,

  prerender: [
    '/',
    '/designs',
    '/designs/burgundy-romance',
    '/designs/timeless-ivory',
    '/designs/sage-garden',
    '/digital-wedding-invitations',
    '/wedding-rsvp',
    '/pricing',
    '/faq',
    '/contact',
  ],
} satisfies Config