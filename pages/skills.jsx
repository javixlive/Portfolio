import {
    Container,
    Heading,
    Box,
    SimpleGrid,
    Divider,
    useColorModeValue,
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { SimpleGridItem } from '../components/grid-item'

import python_svg from '../public/images/svg/python.svg'
import js_svg from '../public/images/svg/js.svg'
import typescript from '../public/images/svg/typescript.svg'
import cpp_svg from '../public/images/svg/cplusplus.svg'

import react from '../public/images/svg/react.svg' 
import redux from '../public/images/svg/redux.svg'
import nodeJs from '../public/images/svg/node-js.svg'
import mongoDb from '../public/images/svg/mongodb.svg'
import postgresql from '../public/images/svg/postgresql.svg'

const Skills = () => (
    <Layout title="skills()">
      <Container maxW="container.md">     
       <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        A list of programming languages and technologies I use.
      </Box>
        <Heading variant="section-title" mb={5}>
          Programming Languages
        </Heading>
  
        <Section delay={0.2}>
          <SimpleGrid columns={[2, 3, 5]} gap={6}>
            <SimpleGridItem
              title="JavaScript"
              thumbnail={js_svg}
            />
            <SimpleGridItem
              title="typescript"
              thumbnail={typescript}
            />
            <SimpleGridItem
              title="Python"
              thumbnail={python_svg}
            />
            <SimpleGridItem
              title="C++"
              thumbnail={cpp_svg}
            />
          </SimpleGrid>
        </Section>
  
        <Heading variant="section-title" mb={5}>
          Technologies
        </Heading>
          <Section delay={0.3}>
          <Section delay={0.2}>
            <SimpleGrid columns={[2, 3, 5]} gap={6}>
              <SimpleGridItem
                title="React"
                thumbnail={react}
                
              />
              <SimpleGridItem
                title="Redux"
                thumbnail={redux}
              />
              <SimpleGridItem
                title="NodeJS"
                thumbnail={nodeJs}
              />
              <SimpleGridItem
                title="MongoDb"
                thumbnail={mongoDb}
              />
              <SimpleGridItem
                title="Postgresql"
                thumbnail={postgresql}
              />
            </SimpleGrid>
          </Section>
        </Section>
        <Divider my={6} borderColor={useColorModeValue('purple.300', 'orange.200')} />
      </Container>
    </Layout>
)

export default Skills;
export { getServerSideProps } from '../components/chakra'
