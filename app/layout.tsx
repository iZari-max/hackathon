
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from "../components/nav/Navigation"
import Footer from '@/components/footer/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from '@/components/Providers'
import { Suspense, lazy } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Site',
  description: 'Built for HackaThon-One',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head/>
      <body className={inter.className}>
        <ClerkProvider>
        <Providers>
        <Navigation />
        <Suspense>
        {children}
        </Suspense>
        <Footer />
        </Providers>
        </ClerkProvider>
        </body>
    </html>
  )
}
