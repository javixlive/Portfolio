import {
  Box,
  Button,
  Container,
  Heading,
  Separator,
  Text
} from '@chakra-ui/react'
import type { Metadata } from 'next'
import NextLink from 'next/link'

export const metadata: Metadata = { title: 'Not found' }

export default function NotFound() {
  return (
    <Container>
      <Heading as="h1" fontSize={{ base: '30px', md: '36px' }}>
        Not found
      </Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Separator my={6} />
      <Box my={6} textAlign="center">
        <Button asChild colorPalette="teal">
          <NextLink href="/">Return to home</NextLink>
        </Button>
      </Box>
    </Container>
  )
}
