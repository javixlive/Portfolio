import { Badge, Wrap } from '@chakra-ui/react'

export default function SkillBadges({ skills }: { skills: string[] }) {
  return (
    <Wrap gap={2}>
      {skills.map(skill => (
        <Badge
          key={skill}
          colorPalette="tag"
          size="lg"
          borderRadius="lg"
          whiteSpace="normal"
        >
          {skill}
        </Badge>
      ))}
    </Wrap>
  )
}
