import Head from "next/head"
import Image from 'next/image'
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
                     <Image src={`/${student.slug}/${student.title}_${student.title}.jpg`} alt={student.title} width={400} height={400} />

                    
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
        "student",
        "profile_picture",
        "bio",
        "portfolio",
        "email",
        "linkedin",
        "twitter",
        "facebook",
        "behance",
        "instagram",
        "studyProgram",
        "p1_headline_1",
        "p1_headline_2",
        "project_image_1",
        "project_desc_1",
        "p2_headline_1",
        "p2_headline_2",
        "project_image_2",
        "project_desc_2",
        "p3_headline_1",
        "p3_headline_2",
        "project_image_3",
        "project_desc_3",
        "p4_headline_1",
        "p4_headline_2",
        "project_image_4",
        "project_desc_4",
        "p5_headline_1",
        "p5_headline_2",
        "project_image_5",
        "project_desc_5",
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
