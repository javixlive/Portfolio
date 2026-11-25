import { Box, Container, Link, List } from '@chakra-ui/react'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { IoOpenOutline } from 'react-icons/io5'
import Paragraph from '../../../components/paragraph'
import { Meta, Title, YearBadge } from '../../../components/work'
import { projects } from '../../../content/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

const findProject = async ({ params }: Props) => {
  const { slug } = await params
  return projects.find(project => project.slug === slug) ?? notFound()
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const project = await findProject(props)
  return { title: project.title, description: project.summary }
}

export default async function Work(props: Props) {
  const project = await findProject(props)

  return (
    <Container>
      <Title>
        {project.title}
        <YearBadge year={project.year} />
      </Title>

      {project.description.map(paragraph => (
        <Paragraph key={paragraph} mb={2}>
          {paragraph}
        </Paragraph>
      ))}

      <List.Root listStyleType="none" ml={4} my={4} gap={1}>
        <List.Item>
          <Box>
            <Meta>Stack</Meta>
            <span>{project.stack.join(', ')}</span>
          </Box>
        </List.Item>
        {project.links.map(link => (
          <List.Item key={link.href}>
            <Box>
              <Meta>{link.label}</Meta>
              <Link
                href={link.href}
                target="_blank"
                rel="noreferrer"
                overflowWrap="anywhere"
              >
                {link.href} <IoOpenOutline />
              </Link>
            </Box>
          </List.Item>
        ))}
        {project.highlights.length > 0 && (
          <List.Item>
            <Box>
              <Meta>Highlights</Meta>
              <List.Root as="ul" ps={5} mt={1} listStyleType="disc">
                {project.highlights.map(highlight => (
                  <List.Item key={highlight}>{highlight}</List.Item>
                ))}
              </List.Root>
            </Box>
          </List.Item>
        )}
      </List.Root>

      {project.images.map(image => (
        <Box key={image.alt} asChild borderRadius="lg" mb={4}>
          <Image
            src={image.src}
            alt={image.alt}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 502px"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      ))}
    </Container>
  )
}
