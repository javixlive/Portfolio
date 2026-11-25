import { Heading } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Heading
      as="h3"
      fontSize="20px"
      lineHeight="1.2"
      textDecoration="underline"
      textUnderlineOffset="6px"
      textDecorationColor="#525252"
      textDecorationThickness="4px"
      mt={3}
      mb={4}
    >
      {children}
    </Heading>
  )
}
