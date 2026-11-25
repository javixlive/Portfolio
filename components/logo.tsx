import { chakra, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { profile } from '../content/site'
import FootprintIcon from './icons/footprint'

const LogoBox = chakra('span', {
  base: {
    fontWeight: 'bold',
    fontSize: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    height: '30px',
    lineHeight: '20px',
    padding: '10px',
    '& > svg': { transition: '200ms ease' },
    '&:hover > svg': { transform: 'rotate(20deg)' }
  }
})

export default function Logo() {
  return (
    <NextLink href="/">
      <LogoBox>
        <FootprintIcon />
        <Text as="span" fontFamily="heading" fontWeight="bold" ml={1}>
          {profile.shortName}
        </Text>
      </LogoBox>
    </NextLink>
  )
}
