import { Badge, Box, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { ReactNode } from 'react'
import { IoChevronForward } from 'react-icons/io5'

export const Title = ({ children }: { children: ReactNode }) => (
  <Box mb={4}>
    <Link asChild>
      <NextLink href="/projects">Projects</NextLink>
    </Link>
    <Box as="span" display="inline-block" mx={1} verticalAlign="middle">
      <IoChevronForward />
    </Box>
    <Heading as="h3" display="inline" fontSize="20px">
      {children}
    </Heading>
  </Box>
)

export const YearBadge = ({ year }: { year: number }) => (
  <Badge colorPalette="tag" ms={2} verticalAlign="middle" fontWeight="bold">
    {year}
  </Badge>
)

export const Meta = ({ children }: { children: ReactNode }) => (
  <Badge
    colorPalette="meta"
    me={2}
    textTransform="uppercase"
    fontWeight="bold"
    fontSize="xs"
  >
    {children}
  </Badge>
)
