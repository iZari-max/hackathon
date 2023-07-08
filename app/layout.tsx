
import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from "../components/nav/Navigation"
import Footer from '@/components/footer/Footer'

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
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        </body>
    </html>
  )
}
