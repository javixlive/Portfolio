import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export const BioSection = ({ children }: { children: ReactNode }) => (
  <Box pl="3.4em" textIndent="-3.4em">
    {children}
  </Box>
)

export const BioYear = ({ children }: { children: ReactNode }) => (
  <Box as="span" fontWeight="bold" mr="1em">
    {children}
  </Box>
)
