import Container from "../components/layout/container"
import Intro from "../components/intro"
import Layout from "../components/layout/layout"
import Head from "next/head"
import Navbar from "../components/navigation/navbar"
import HomeContent from "../components/studyprograminfo"
import BottomMap from "../components/homemap"

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Avgangsutstilling 2023`}</title>
        </Head>
        <Navbar />
        <Container>
          <Intro />
          <HomeContent />
          <BottomMap />
        </Container>
      </Layout>
    </>
  )
}
