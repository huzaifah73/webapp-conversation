import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Smart Muhadathah',
    short_name: 'Smart Muhadathah',
    description: 'Aplikasi AI untuk latihan komunikasi Bahasa Arab',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    orientation: 'portrait',
    lang: 'ms',
    icons: [
      {
        src: '/smart-muhadathah-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/smart-muhadathah-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
