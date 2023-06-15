import React from 'react'
import Navbar from '@/app/ui/Navbar/pagemovie-catalog'
import Providers from './util/react-query/provider'

export const metadata = {
  title: 'Movie-Catalog',
  description: 'Top rated movies catalog!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
