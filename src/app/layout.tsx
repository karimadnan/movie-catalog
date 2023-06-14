import React from 'react'
import Navbar from '@/UI/Navbar/pagemovie-catalog'

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
        <Navbar />
        {children}
      </body>
    </html>
  )
}
