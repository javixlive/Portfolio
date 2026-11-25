'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  Portal,
  Stack
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { IoLogoGithub, IoMenu } from 'react-icons/io5'
import { profile } from '../content/site'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const navItems = [
  { href: '/projects', label: 'Projects', also: '/works/' },
  { href: '/skills', label: 'Skills' },
  { href: '/resume', label: 'Resume' }
]

const isActive = (pathname: string, item: (typeof navItems)[number]) =>
  pathname === item.href ||
  (item.also !== undefined && pathname.startsWith(item.also))

const LinkItem = ({
  href,
  active,
  children
}: {
  href: string
  active: boolean
  children: ReactNode
}) => (
  <Link
    asChild
    p={2}
    borderRadius="0"
    bg={active ? 'grassTeal' : undefined}
    color={active ? '#202023' : 'text'}
    aria-current={active ? 'page' : undefined}
    _hover={{ textDecoration: 'underline' }}
  >
    <NextLink href={href}>{children}</NextLink>
  </Link>
)

export default function Navbar() {
  const pathname = usePathname()

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg="navBg"
      backdropFilter="blur(10px)"
      zIndex={2}
    >
      <Container display="flex" p={2} maxW="768px">
        <Flex align="center" mr={5}>
          <Heading as="h1" fontSize="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction="row"
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          flexGrow={1}
          gap={2}
        >
          {navItems.map(item => (
            <LinkItem
              key={item.href}
              href={item.href}
              active={isActive(pathname, item)}
            >
              {item.label}
            </LinkItem>
          ))}
          <Link
            href={profile.sourceUrl}
            target="_blank"
            rel="noreferrer"
            p={2}
            pl={2}
            gap={1}
            color="text"
          >
            <IoLogoGithub />
            Source
          </Link>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu.Root lazyMount>
              <Menu.Trigger asChild>
                <IconButton variant="outline" aria-label="Options">
                  <IoMenu />
                </IconButton>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content minW="56">
                    <Menu.Item value="/" asChild>
                      <NextLink href="/">About</NextLink>
                    </Menu.Item>
                    {navItems.map(item => (
                      <Menu.Item key={item.href} value={item.href} asChild>
                        <NextLink href={item.href}>{item.label}</NextLink>
                      </Menu.Item>
                    ))}
                    <Menu.Item value="source" asChild>
                      <a href={profile.sourceUrl}>View Source</a>
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
