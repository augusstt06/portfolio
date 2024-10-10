'use client'

import Nav from '@/components/organisms/Nav'

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen text-white">
      <Nav />
      {children}
    </div>
  )
}
