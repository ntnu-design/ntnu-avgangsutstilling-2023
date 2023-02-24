import Link from "next/link"
import { getStudents } from "../../lib/api"
import { getHeading } from "../../lib/utils"
import Head from "next/head"
import Layout from "../../components/layout/layout"
import Navbar from "../../components/navigation/navbar"
import Container from "../../components/layout/container"
import { GetStaticPaths, GetStaticPathsResult } from "next"
import type { StudentItem, StudyProgrammeParams } from "../../interfaces/student"

export default function StudyProgrammeIndex({ students, params }: Props) {
    const { studyProgramme } = params
    const heading = getHeading(studyProgramme)

    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023 - ${heading}`}</title>
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

export const getStaticProps = async ({ params }: { params: StudyProgrammeParams }) => {
    const { studyProgramme } = params
    const students = getStudents(
        // ! Her legger man til de feltene man trenger fra content.md filen
        ["title", "slug", "bio", "portfolio", "email"],
        studyProgramme
    )

    return {
        props: { students, params },
    }
}

export const getStaticPaths: GetStaticPaths = async function (): Promise<GetStaticPathsResult> {
    return {
        paths: [
            { params: { studyProgramme: "bwu" } },
            { params: { studyProgramme: "bixd" } },
            { params: { studyProgramme: "bmed" } },
        ],
        fallback: false,
    }
}

interface Props {
    students: StudentItem[];
    params: StudyProgrammeParams;
}