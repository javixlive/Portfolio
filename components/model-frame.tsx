import { Box, Spinner } from '@chakra-ui/react'
import type { ReactNode, Ref } from 'react'

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const ModelContainer = ({
  ref,
  children
}: {
  ref?: Ref<HTMLDivElement>
  children?: ReactNode
}) => (
  <Box
    ref={ref}
    m="auto"
    mt={{ base: '-20px', sm: '-60px', md: '-120px' }}
    mb={{ base: '-40px', sm: '-140px', md: '-200px' }}
    w={{ base: '280px', sm: '480px', md: '640px' }}
    h={{ base: '280px', sm: '480px', md: '640px' }}
    position="relative"
  >
    {children}
  </Box>
)
