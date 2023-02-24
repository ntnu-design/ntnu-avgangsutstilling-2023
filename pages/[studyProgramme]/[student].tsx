import Head from "next/head"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { getStudentBySlug, getStudents } from "../../lib/api"
//import markdownToHtml from "../../lib/markdownToHtml"
import Layout from "../../components/layout/layout"
import Navbar from "../../components/navigation/navbar"
import Container from "../../components/layout/container"
import PostTitle from "../../components/posts/post-title"
import type { StudentItem } from "../../interfaces/student"

export default function Student({ student }: Props) {
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
    const bwu: StudentItem[] = getStudents(["slug"], "bwu")
    const bixd: StudentItem[] = getStudents(["slug"], "bixd")
    const bmed: StudentItem[] = getStudents(["slug"], "bmed")
    const students: StudentItem[] = [...bwu, ...bixd, ...bmed]

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

interface Props {
    student: StudentItem;
}

interface Params {
    params: {
        student: string;
        studyProgramme: string;
    }
}
