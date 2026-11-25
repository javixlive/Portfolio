import { Text, type TextProps } from '@chakra-ui/react'

export default function Paragraph(props: TextProps) {
  return <Text textAlign="justify" textIndent="1em" hyphens="auto" {...props} />
}
