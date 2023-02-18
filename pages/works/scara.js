import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="scara">
    <Container>
      <Title>
        SCARA Robot <Badge>2021</Badge>
      </Title>
      <P>
        Design and 3D Simulation of a Selective Compliance Articulated Robot Arm 
        using Matlab and V-Realm Build.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Software</Meta>
          <span>Mathlab/Simulink, SolidWorks</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media</Center>
      </Heading>

      <WorkImage src="/images/works/Design.png" alt="Scara Design" />
      <WorkImage src="/images/works/PID.png" alt="Scara PID" />
      <WorkImage src="/images/works/simulation.png" alt="Scara Simulation" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
