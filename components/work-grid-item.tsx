import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import type { Project } from '../content/site'

export default function WorkGridItem({ project }: { project: Project }) {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={project.thumbnail}
          alt={project.title}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 240px"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        />
        <LinkOverlay asChild>
          <NextLink href={`/works/${project.slug}`}>
            <Text mt={2} fontSize="20px">
              {project.title}
            </Text>
          </NextLink>
        </LinkOverlay>
        <Text fontSize="14px">{project.summary}</Text>
      </LinkBox>
    </Box>
  )
}
