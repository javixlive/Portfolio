import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  List,
  Separator,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import type { IconType } from 'react-icons'
import {
  IoChevronForward,
  IoDownloadOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMail
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Experience from '../components/experience'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import SectionTitle from '../components/section-title'
import type { SocialLink } from '../content/site'
import { experience, profile, socials, timeline } from '../content/site'

const socialIcons: Record<SocialLink['network'], IconType> = {
  linkedin: IoLogoLinkedin,
  github: IoLogoGithub,
  twitter: IoLogoTwitter,
  email: IoMail
}

export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="card"
        backdropFilter="blur(10px)"
      >
        {profile.greeting}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading
            as="h2"
            fontSize={{ base: '30px', md: '36px' }}
            lineHeight={{ base: '1.33', md: '1.2' }}
          >
            {profile.name}
          </Heading>
          <p>{profile.tagline}</p>
          <Text fontSize="sm" opacity={0.8}>
            {profile.location} · {profile.availability}
          </Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="rgba(255, 255, 255, 0.8)"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src={profile.avatar}
              alt="Profile image"
              width={100}
              height={100}
              priority
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <SectionTitle>About me</SectionTitle>
        {profile.about.map(paragraph => (
          <Paragraph key={paragraph} mb={2}>
            {paragraph}
          </Paragraph>
        ))}
        <HStack justify="center" wrap="wrap" gap={3} my={4}>
          <Button asChild colorPalette="accent">
            <NextLink href="/projects">
              My projects <IoChevronForward />
            </NextLink>
          </Button>
          <Button asChild colorPalette="accent" variant="outline">
            <a
              href={profile.resume.href}
              download={profile.resume.downloadName}
            >
              <IoDownloadOutline /> Download resume
            </a>
          </Button>
        </HStack>
      </Section>

      <Section delay={0.2}>
        <SectionTitle>Experience</SectionTitle>
        <Experience roles={experience} />
      </Section>

      <Section delay={0.3}>
        <SectionTitle>Bio</SectionTitle>
        {timeline.map(entry => (
          <BioSection key={`${entry.year}-${entry.text}`}>
            <BioYear>{entry.year}</BioYear>
            {entry.text}
          </BioSection>
        ))}
      </Section>

      <Section delay={0.4}>
        <SectionTitle>I ♥</SectionTitle>
        <Paragraph>{profile.interests}</Paragraph>
      </Section>

      <Section delay={0.5}>
        <SectionTitle>On the web</SectionTitle>
        <List.Root listStyleType="none">
          {socials.map(social => {
            const Icon = socialIcons[social.network]
            return (
              <List.Item key={social.network}>
                <Button asChild variant="ghost" colorPalette="accent">
                  <a
                    href={social.href}
                    target={social.network === 'email' ? undefined : '_blank'}
                    rel="noreferrer"
                  >
                    <Icon /> {social.label}
                  </a>
                </Button>
              </List.Item>
            )
          })}
        </List.Root>
      </Section>

      <Separator my={6} borderColor="divider" />
    </Container>
  )
}
