import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNovaTech from '../public/images/novatech/LandingPage.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'

import thumbScara from '../public/images/works/scara.png'
import thumbIWP from '../public/images/works/IWP4.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="novatech" 
            title="NovaTech Power" 
            thumbnail={thumbNovaTech}
          >
            E-Commerce for buying/selling PC parts.
          </WorkGridItem>
        </Section>
        {/* <Section>
          <WorkGridItem
            id="walknote"
            title="Freelance Workers"
            thumbnail={thumbWalknote}
          >
            E-Commerce where Freelancers can sell their services.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Pokedex"
            thumbnail={thumbFourPainters}
          >
            Interactive Pokedex with pokemons from 1st to 2nd gen.
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="scara" thumbnail={thumbScara} title="SCARA Robot">
            Design and 3D Simulation of a Selective Compliance Articulated Robot Arm
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="intertiaWheel"
            thumbnail={thumbIWP}
            title="Inertia Wheel Pendulum"
          >
            Control Design for a IWP which controls a bar that will be maintained at a certain angle
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
