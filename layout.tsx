
import { Figtree } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const front = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'DBtrack',
  description: 'Music Streaming!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={front.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
