import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Divider,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Mechatronics Engineer/Full Stack Developer based in México!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Javier Montaño Rodríguez
          </Heading>
          <p>Craftsman ( Developer / Programmer / Engineer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/Catbug.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          I&apos;m a Engineer with a Bachelor&apos;s degree in Mechatronics & 
          FullStack Developer experienced in Javascript, 
          NodeJS, React, C++ with a passion for 
          building new technologies that interest me. 
          I have a knack for learning new tech, to plan and design a way 
          to solve real-life problems. When not working I love reading books.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme={useColorModeValue('purple', 'orange')}
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Jalisco, México.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed A Bachelor in Mechatronics Engineering in the University of 
          Mexico&apos;s Valley
          (UVM).
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated on Henry&apos;s Bootcamp in Full Stack Web Developer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Drawing, Books, Videogames
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.linkedin.com/in/javiermrod/" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoLinkedin />}
              >
                @javiermrod
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/javixlive" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoGithub />}
              >
                @javixlive
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Kitterbuggy" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoTwitter />}
              >
                @Kitterbuggy
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Divider my={6} borderColor={useColorModeValue('white.300', 'purple.200')} />
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
