import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="interiawheel">
    <Container>
      <Title>
        Inertia Wheel Pendulum <Badge>2020</Badge>
      </Title>
      <P>
      This project expresses the control of a motorpropeller-rocker system in which upon reaching the
      required altitude, will activate an a aromatherapy
      diffuser.
      A motor-propeller-rocker system is embedded in a wall
      and is formed by a bar that has a degree of freedom.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Software</Meta>
          <span>Mathlab/Simulink, SolidWorks</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/IWP.png" alt="pendulum design" />
      <WorkImage src="/images/works/IWP2.png" alt="pendulum model" />
      <WorkImage src="/images/works/IWP3.png" alt="pendulum pid" />
      <WorkImage src="/images/works/IWP4.png" alt="pendulum final" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
