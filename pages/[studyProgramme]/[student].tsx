// Next
import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Head from "next/head"

// API
import { getStudentBySlug, getStudents } from "../../lib/api"
//import markdownToHtml from "../../lib/markdownToHtml"

// Components
import Container from "../../components/layout/container"
import Layout from "../../components/layout/layout"
import PostTitle from "../../components/posts/post-title"
import Navbar from "../../components/navigation/navbar"

// Types
import type StudentType from "../../interfaces/student"
type Props = {
    student: StudentType
}
type Params = {
    params: {
        student: string
        studyProgramme: string
    }
}

export default function Student({ student }: Props) {
    //console.log(student);

    const router = useRouter()
    if (!router.isFallback && !student?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023`}</title>
            </Head>
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <Navbar />

                        <article className="mb-32">
                            <Head>
                                <title></title>
                                <meta property="og:image" content="" />
                            </Head>
                            <PostTitle>{student.title}</PostTitle>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }: Params) {
    const { student, studyProgramme } = params
    const slug = `${studyProgramme}/${student}/content.md`

    const studentContent = getStudentBySlug(slug, [ // ! Legg til de feltene man trenger fra content.md
        "title",
        "slug",
        "profile_picture",
        "bio",
        "portfolio",
    ])

    //const content = await markdownToHtml(post.content || "")

    return {
        props: {
            student: studentContent,
        },
    }
}

export async function getStaticPaths() {
    const bwu = getStudents(["slug"], "bwu")
    const bixd = getStudents(["slug"], "bixd")
    const bmed = getStudents(["slug"], "bmed")
    const students = [...bwu, ...bixd, ...bmed]

    return {
        paths: students.map((student) => {
            return {
                params: {
                    student: `${student.slug.split("/")[1]}`,
                    studyProgramme: `${student.slug.split("/")[0]}`,
                },
            }
        }),
        fallback: false,
    }
}
