import Container from "../components/layout/container"
import Layout from "../components/layout/layout"
import Head from "next/head"
import BottomMap from "../components/BottomMap"
import HeroDel from "../components/HeroSection/HeroSection"
import StudyProgrammeInfo from "../components/StudyProgrammeInfo/StudyProgrammeInfo"
import Link from "next/link"
import Button from "components/Button"

export default function Index() {
    return (
        <>
            <Layout>
                <Head>
                    <title>{`Avgangsutstilling 2023`}</title>
                </Head>
                <Container>
                    <HeroDel />
                    <div id="program" className="w-full flex justify-center">
                        {/* This needs to be an <a> tag instead of <Link> since NextJS doesn't like internal resource linking (PDF) */}
                        <a href={`/program.pdf`} target="_blank">
                            <Button
                                studyProgramme={"avgang"}
                                tabIndex={-1}
                                style={{ width: "30em", maxWidth: "50vw" }}
                            >
                                Vis program
                            </Button>
                        </a>
                    </div>
                    <StudyProgrammeInfo studyProgramme="bixd" reverse={false} />
                    <StudyProgrammeInfo studyProgramme="bmed" reverse={true} />
                    <StudyProgrammeInfo studyProgramme="bwu" reverse={false} />
                    <BottomMap />
                </Container>
            </Layout>
        </>
    )
}
