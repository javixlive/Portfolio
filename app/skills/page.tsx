import { Container, Separator } from '@chakra-ui/react'
import type { Metadata } from 'next'
import Section from '../../components/section'
import SectionTitle from '../../components/section-title'
import SkillBadges from '../../components/skill-badges'
import { skillGroups } from '../../content/site'

export const metadata: Metadata = { title: 'Skills' }

export default function Skills() {
  return (
    <Container maxW="768px">
      {skillGroups.map((group, index) => (
        <Section key={group.name} delay={index * 0.1}>
          <SectionTitle>{group.name}</SectionTitle>
          <SkillBadges skills={group.skills} />
        </Section>
      ))}
      <Separator my={6} borderColor="divider" />
    </Container>
  )
}
