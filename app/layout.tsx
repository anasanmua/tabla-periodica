import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500","600", "900"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: '150 Aniversario de la Tabla Periodica',
  description: 'Celebrando el 150 aniversario de la Tabla Periodica - Universidad de Sevilla, CSIC y FECYT',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${raleway.variable} font-sans antialiased bg-fixed bg-cover bg-center bg-no-repeat min-h-screen flex flex-col`}
        style={{
          backgroundImage: "url('/images/bg.png')",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
