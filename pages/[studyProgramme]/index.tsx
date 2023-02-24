import Link from "next/link"
import { getStudents } from "../../lib/api"

import Container from "../../components/layout/container"
import Layout from "../../components/layout/layout"
import Head from "next/head"
import Navbar from "../../components/navigation/navbar"
import StudentType from "../../interfaces/student"

type Props = {
    students: StudentType[]
}

export default function StudyprogrammeIndex({ students }: Props) {
    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023`}</title>
            </Head>
            <Container>
                <Navbar />
                <div>
                    <h1>Webutvikling</h1>
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

type Params = {
    params: {
        studyProgramme: string
    }
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
