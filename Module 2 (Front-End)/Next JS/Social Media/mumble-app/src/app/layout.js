import { Open_Sans } from 'next/font/google'
import './globals.css'

const opensans = Open_Sans({ subsets: ['latin'] })

// Components
import Navbar from '@/components/Navbar'

// Providers
import { TanstackProvider } from '@/providers/TanstackProvider'
import ReduxProvider from '@/providers/ReduxProvider'

export const metadata = {
  title: 'Mumble',
  description: 'Social Media App',
}

export default function RootLayout({ children }) {
  return (
    <html id="main" lang="en">
      <body className={opensans.className}>
        <ReduxProvider>
          <TanstackProvider>
            <Navbar />
            {children}
          </TanstackProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
