import Container from "../components/layout/container"
import Layout from "../components/layout/layout"
import Head from "next/head"
import HomeContent from "../components/studyprograminfo"
import BottomMap from "../components/homemap"
import HeroDel from "../components/temporary/hero-del"
import StudyProgrammeInfo from "../components/StudyProgrammeInfo/StudyProgrammeInfo"

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{`Avgangsutstilling 2023`}</title>
        </Head>
        <Container>
          <HeroDel />
          {/* <HomeContent /> */}
          <StudyProgrammeInfo studyProgramme="bixd" reverse={false} />
          <StudyProgrammeInfo studyProgramme="bmed" reverse={true} />
          <StudyProgrammeInfo studyProgramme="bwu" reverse={false} />
          <BottomMap />
        </Container>
      </Layout>
    </>
  )
}
