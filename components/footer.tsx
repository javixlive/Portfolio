import { Box, Link } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { profile } from '../content/site'

const FooterLink = ({
  href,
  children
}: {
  href: string
  children: ReactNode
}) => (
  <Link
    display="inline"
    color={{ _light: 'purple', _dark: 'orange' }}
    href={href}
  >
    {children}
  </Link>
)

export default function Footer() {
  return (
    <Box textAlign="center" opacity={0.8} fontSize="sm">
      &copy; {new Date().getFullYear()} {profile.shortName}. Theme inspired by:{' '}
      <FooterLink href="https://www.craftz.dog/">
        Takuya Matsuyama&apos;s website
      </FooterLink>
      . 3D model:{' '}
      <FooterLink href="https://sketchfab.com/3d-models/lizard-mage-817d52d9887948bfa0ca43aef6064eaa">
        &quot;Lizard Mage&quot; by Enalrem
      </FooterLink>
      , licensed under{' '}
      <FooterLink href="https://creativecommons.org/licenses/by-nc/4.0/">
        CC BY-NC 4.0
      </FooterLink>
      . All Rights Reserved.
    </Box>
  )
}
