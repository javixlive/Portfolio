import { Container, Heading, Separator, SimpleGrid } from '@chakra-ui/react'
import type { Metadata } from 'next'
import Section from '../../components/section'
import WorkGridItem from '../../components/work-grid-item'
import type { ProjectCategory } from '../../content/site'
import { projectCategories, projects } from '../../content/site'

export const metadata: Metadata = { title: 'Projects' }

const categories = Object.keys(projectCategories) as ProjectCategory[]

export default function Projects() {
  return (
    <Container>
      {categories.map((category, groupIndex) => (
        <Section key={category} delay={groupIndex * 0.3}>
          {groupIndex > 0 && <Separator my={6} />}
          <Heading as="h3" fontSize="20px" mb={4}>
            {projectCategories[category]}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {projects
              .filter(project => project.category === category)
              .map(project => (
                <WorkGridItem key={project.slug} project={project} />
              ))}
          </SimpleGrid>
        </Section>
      ))}
      <Separator my={6} borderColor="divider" />
    </Container>
  )
}
