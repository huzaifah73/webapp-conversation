import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

export const metadata = {
  title: 'Smart Muhadathah',
  description: 'Aplikasi AI untuk latihan komunikasi Bahasa Arab',
  applicationName: 'Smart Muhadathah',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      {
        url: '/smart-muhadathah-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: '/smart-muhadathah-192.png',
  },
}

const LocaleLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = await getLocaleOnServer()

  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
