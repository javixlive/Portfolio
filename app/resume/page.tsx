import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  Separator,
  Stack,
  Text
} from '@chakra-ui/react'
import type { Metadata } from 'next'
import NextLink from 'next/link'
import { IoDownloadOutline } from 'react-icons/io5'
import Experience from '../../components/experience'
import Paragraph from '../../components/paragraph'
import Section from '../../components/section'
import SectionTitle from '../../components/section-title'
import SkillBadges from '../../components/skill-badges'
import {
  education,
  experience,
  profile,
  projects,
  skillGroups
} from '../../content/site'

export const metadata: Metadata = { title: 'Resume' }

export default function Resume() {
  return (
    <Container maxW="768px">
      <Box textAlign="center" my={4}>
        <Button asChild colorPalette="accent">
          <a href={profile.resume.href} download={profile.resume.downloadName}>
            <IoDownloadOutline /> Download PDF
          </a>
        </Button>
      </Box>

      <Section delay={0.1}>
        <SectionTitle>Summary</SectionTitle>
        <Paragraph>{profile.about[0]}</Paragraph>
      </Section>

      <Section delay={0.2}>
        <SectionTitle>Skills</SectionTitle>
        <Stack gap={4}>
          {skillGroups.map(group => (
            <Box key={group.name}>
              <Heading as="h4" fontSize="md" mb={2}>
                {group.name}
              </Heading>
              <SkillBadges skills={group.skills} />
            </Box>
          ))}
        </Stack>
      </Section>

      <Section delay={0.3}>
        <SectionTitle>Experience</SectionTitle>
        <Experience roles={experience} />
      </Section>

      <Section delay={0.4}>
        <SectionTitle>Projects</SectionTitle>
        <Stack gap={4}>
          {projects.map(project => (
            <Box key={project.slug}>
              <Heading as="h4" fontSize="md">
                <Link asChild>
                  <NextLink href={`/works/${project.slug}`}>
                    {project.title}
                  </NextLink>
                </Link>
              </Heading>
              <Text fontSize="sm" opacity={0.7}>
                {project.stack.join(', ')}
              </Text>
              <Text>{project.summary}</Text>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section delay={0.5}>
        <SectionTitle>Education</SectionTitle>
        <Stack gap={3}>
          {education.map(entry => (
            <Box key={entry.credential}>
              <Heading as="h4" fontSize="md">
                {entry.credential}
              </Heading>
              <Text>{entry.school}</Text>
              <Text fontSize="sm" opacity={0.7}>
                {entry.start} – {entry.end}
              </Text>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section delay={0.6}>
        <SectionTitle>Languages</SectionTitle>
        <List.Root as="ul" ps={5} listStyleType="disc">
          {profile.languages.map(language => (
            <List.Item key={language}>{language}</List.Item>
          ))}
        </List.Root>
      </Section>

      <Separator my={6} borderColor="divider" />
    </Container>
  )
}
