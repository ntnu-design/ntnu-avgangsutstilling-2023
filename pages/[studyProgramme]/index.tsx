import Link from "next/link"
import { getStudents } from "../../lib/api"

import Container from "../../components/layout/container"
import Layout from "../../components/layout/layout"
import Head from "next/head"
import Navbar from "../../components/navigation/navbar"
import StudentType from "../../interfaces/student"

type Props = {
    students: StudentType[]
    params: any
}

type Params = {
    params: {
        studyProgramme: string
    }
}

const getHeading = (studyProgramme) => {
    let heading
    switch (studyProgramme) {
        case "bwu":
            heading = "Webutvikling"
            break
        case "bixd":
            heading = "Interaksjonsdesign"
            break
        case "bmed":
            heading = "Grafisk Design"
            break
        default:
            heading = "Avgangsutstilling"
            break
    }
    return heading
}

export default function StudyprogrammeIndex({ students, params }: Props) {    
    const { studyProgramme } = params
    const heading = getHeading(studyProgramme)

    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023`}</title>
            </Head>
            <Container>
                <Navbar />
                <div>
                    <h1 className="text-xl font-bold">{heading}</h1>
                    <ul>
                        {students.map((student, index) => (
                            <li key={index}>
                                <Link href={`${student.slug}`}>
                                    {student.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({ params }: Params) => {
    const { studyProgramme } = params
    const students = getStudents(
        ["title", "slug", "bio", "portfolio", "email"],
        studyProgramme
    )

    return {
        props: { students, params },
    }
}

export const getStaticPaths = async function () {
    return {
        paths: [
            { params: { studyProgramme: "bwu" } },
            { params: { studyProgramme: "bixd" } },
            { params: { studyProgramme: "bmed" } },
        ],
        fallback: false,
    }
}
