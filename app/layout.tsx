import { Box, Container } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import type { ReactNode } from 'react'
import Footer from '../components/footer'
import ModelHeader from '../components/model-header'
import Navbar from '../components/navbar'
import { profile } from '../content/site'
import Providers from './providers'

const headingFont = M_PLUS_Rounded_1c({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-heading'
})

export const metadata: Metadata = {
  title: {
    default: `${profile.shortName} - Homepage`,
    template: `%s - ${profile.shortName}`
  },
  description: profile.description,
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={headingFont.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <Box as="main" pb={8}>
            <Container maxW="768px" pt={14}>
              <ModelHeader />
              {children}
              <Footer />
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  )
}
