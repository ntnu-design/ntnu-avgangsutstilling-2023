import Container from '../components/layout/container'
import Intro from '../components/intro'
import Layout from '../components/layout/layout'
import Head from 'next/head'
import Navbar from '../components/navigation/navbar'

export default function Index() {

  return (
    <>
      <Layout>
        <Head>
          <title>{`Avgangsutstilling 2023`}</title>
        </Head>
        <Container>
          <Navbar />
          <Intro />
        </Container>
      </Layout>
    </>
  )
}

