import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.8} fontSize="sm">
      &copy; {new Date().getFullYear()} Javier Montaño. 
      Theme inspired by: 
      <Link color={"orange"} href={'https://www.craftz.dog/'}>
         Takuya Matsuyama&apos;s website. 
      </Link>
      All Rights Reserved.
    </Box>
  )
}


export default Footer
