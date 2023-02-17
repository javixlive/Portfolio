import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="novatech">
    <Container>
      <Title>
        NovaTech Power&nbsp;<Badge>2023</Badge>
      </Title>
      <P>
      NovaTech Power is an E-Commerce that was build for my final project 
      at Henry Bootcamp, it&apos;s a platform where people can buy/sell PC parts. 
      It presents the necessary characteristics of an E-Commerce and is perfectly 
      functional.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://henrytech.vercel.app/">
          https://henrytech.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Technologies</Meta>
          <span>Js/React/Redux-ToolKit/Material UI/NodeJs/Express/Socket.IO</span>
        </ListItem>
        <ListItem>
          <Meta>Characteristics</Meta>
          <span>
            <br/>
            🚀Group chat in real time.
            <br/>
            🔥PDF invoices
            <br/>
            🚄Real-time PUSH notifications
            <br/>
            ⚡ CRUD of products.
            <br/>
            🌍Third party authentication with Google
            <br/>
            📈Dashboard with real-time graphics
            <br/>
            🕶Ability to make a user root user
            <br/>
            🛡 Payment gateway with PayPal
            <br/>
            📲Native application for Android.

          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/novatech/Home.png" alt="novatech" />
      <WorkImage src="/images/novatech/ProductDetails.png" alt="novatech" />
      <WorkImage src="/images/novatech/Reviews.png" alt="novatech" />
      <WorkImage src="/images/novatech/Dashboard.png" alt="novatech" />
      <WorkImage src="/images/novatech/CreateProduct.png" alt="novatech" />
      <WorkImage src="/images/novatech/Calendar.png" alt="novatech" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
