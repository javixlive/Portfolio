import { Box, Link, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.8} fontSize="sm">
      &copy; {new Date().getFullYear()} Javier Montaño. 
      Theme inspired by:&nbsp;
      <Link color={useColorModeValue('purple', 'orange')} href={'https://www.craftz.dog/'}>
         Takuya Matsuyama&apos;s website.&nbsp;
      </Link>
      All Rights Reserved.
    </Box>
  )
}


export default Footer
