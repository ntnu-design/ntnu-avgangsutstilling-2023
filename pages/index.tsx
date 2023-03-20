import Container from "../components/layout/container"
import Layout from "../components/layout/layout"
import Head from "next/head"
import HomeContent from "../components/studyprograminfo"
import BottomMap from "../components/homemap"
import HeroDel from "../components/temporary/hero-del"

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Avgangsutstilling 2023`}</title>
        </Head>
        <Container>
          <HeroDel />
          <HomeContent />
          <BottomMap />
        </Container>
      </Layout>
    </>
  )
}
