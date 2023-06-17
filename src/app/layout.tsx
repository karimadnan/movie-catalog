import React from 'react'
import Navbar from '@/ui/navbar/pagemovie-catalog'
import ReactQueryProvider from '../util/react-query/provider'
import ThemeProvider from '../ui/theme/theme-provider'
import { StyledApp } from './styles'

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
        <ReactQueryProvider>
          <ThemeProvider>
            <StyledApp>
              <Navbar />
              {children}
            </StyledApp>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
