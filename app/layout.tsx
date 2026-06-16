import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sf-pro',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-new-york',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'A Tribute to My Father | Developed by Arhan',
  description: 'An immersive cinematic digital experience dedicated to the greatest father.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#000000',
  robots: 'noindex, nofollow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Father's Day Premium Tribute Portfolio",
    "creator": {
      "@type": "Person",
      "name": "Arhan"
    },
    "description": "Premium interactive storytelling engineered using architectural Next.js structure rules."
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}