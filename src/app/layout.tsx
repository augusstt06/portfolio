'use client'

import { ThemeProvider } from 'next-themes'

import './globals.css'

import Nav from '@/components/organisms/Nav'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider attribute="class">
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
