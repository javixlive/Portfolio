import { Box, Heading, List, Text } from '@chakra-ui/react'
import type { Role } from '../content/site'

export default function Experience({ roles }: { roles: Role[] }) {
  return roles.map(role => (
    <Box key={`${role.company}-${role.start}`} mb={6}>
      <Heading as="h4" fontSize="md" lineHeight="1.4">
        {role.title}
      </Heading>
      <Text fontWeight="bold" opacity={0.85}>
        {role.company}
      </Text>
      <Text fontSize="sm" opacity={0.7}>
        {role.location} · {role.start} – {role.end}
      </Text>
      <List.Root as="ul" ps={5} mt={2} gap={1} listStyleType="disc">
        {role.highlights.map(highlight => (
          <List.Item key={highlight}>{highlight}</List.Item>
        ))}
      </List.Root>
    </Box>
  ))
}
