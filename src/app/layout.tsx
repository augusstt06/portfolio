import './globals.css'

export const metadata = {
  title: 'ChungYeonKim | portfolio',
  description: '안녕하세요 프론트엔드 개발자 김충연입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  )
}
