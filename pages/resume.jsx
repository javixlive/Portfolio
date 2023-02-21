import {
	Divider,
	Link,
	Container,
	Box,
	Button,
	useColorModeValue,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article';
import Section from '../components/section';

const Posts = () => (
  <Layout title="Resume">
		<Container maxW="container.md">
			<Box
				borderRadius="lg"
				mb={6}
				p={3}
				textAlign="center"
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
				css={{ backdropFilter: 'blur(10px)' }}
			>
				Check out my resume below
			</Box>
			<Section delay={0.1}>
				<Box align="center" my={4}>
					<Link href="/Resume.pdf" target="_blank">
						<Button
							colorScheme={useColorModeValue('purple', 'orange')}	>
							Resume
						</Button>
					</Link>
				</Box>
			</Section>
			<Divider my={6} borderColor={useColorModeValue('white.300', 'purple.200')} />
		</Container>
	</Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
