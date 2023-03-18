import Head from "next/head"
import Image from "next/image"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { getStudentBySlug, getStudents } from "../../lib/api"
//import markdownToHtml from "../../lib/markdownToHtml"
import Layout from "../../components/layout/layout"
import Navbar from "../../components/navigation/navbar"
import Container from "../../components/layout/container"
import type { StudentItem } from "../../interfaces/student"

export default function Student({ student }: Props) {
    const router = useRouter()
    if (!router.isFallback && !student?.studyProgramme) {
        return <ErrorPage statusCode={404} />
    }
    const socialMediaLinks = [
        { name: "email", url: student.email },
        { name: "globe", url: student.portfolio },
        { name: "linkedin", url: student.linkedin },
        { name: "behance", url: student.behance },
        { name: "instagram", url: student.instagram },
    ]
    const studentProjects = [
        {
            headline_1: student.p1_headline_1,
            headline_2: student.p1_headline_2,
            image: student.project_image_1,
            desc: student.project_desc_1,
        },
        {
            headline_1: student.p2_headline_1,
            headline_2: student.p2_headline_2,
            image: student.project_image_2,
            desc: student.project_desc_2,
        },
        {
            headline_1: student.p3_headline_1,
            headline_2: student.p3_headline_2,
            image: student.project_image_3,
            desc: student.project_desc_3,
        },
        {
            headline_1: student.p4_headline_1,
            headline_2: student.p4_headline_2,
            image: student.project_image_4,
            desc: student.project_desc_4,
        },
        {
            headline_1: student.p5_headline_1,
            headline_2: student.p5_headline_2,
            image: student.project_image_5,
            desc: student.project_desc_5,
        },
    ]

    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023`}</title>
            </Head>
            <Navbar />

            <Container>
                {router.isFallback ? (
                    <p>Loading…</p>
                ) : (
                    <>
                        <article className="mb-32">
                            <Head>
                                <title>{student.title}</title>
                                <meta property="og:image" content="" />
                            </Head>
                        </article>
                        <main className="h-screen">
                            <div className="flex">
                                <Image
                                    src={`/${student.studyProgramme}/${student.profile_picture}`}
                                    alt={student.title}
                                    width={400}
                                    height={400}
                                />
                                <div>
                                    <p>{student.title}</p>
                                    <div dangerouslySetInnerHTML={{ __html: student.bio }} />
                                </div>
                            </div>
                            <div className="flex">
                                {socialMediaLinks.map((link, index) => {
                                    if (link.url !== "") {
                                        return (
                                            <a href={link.url} key={index}>
                                                <Image
                                                    src={
                                                        "/social-media/" +
                                                        link.name +
                                                        ".svg"
                                                    }
                                                    alt={link.name + " icon"}
                                                    width={50}
                                                    height={50}
                                                />
                                            </a>
                                        )
                                    }
                                })}
                            </div>
                            <div className="flex justify-center">
                                <button>
                                    <a href="#prosjekter">
                                        <Image
                                            src={"/scrollarrow.svg"}
                                            width={50}
                                            height={50}
                                            alt=""
                                        />
                                    </a>
                                </button>
                            </div>
                        </main>
                        <section id="prosjekter">
                            <h2>Prosjekter</h2>
                            {studentProjects.map((project, index) => {
                                if (project.headline_1 !== "") {
                                    return (
                                        <div className="flex" key={index}>
                                            <Image
                                                src={
                                                    "/" +
                                                    student.studyProgramme +
                                                    "/" +
                                                    project.image
                                                }
                                                width={400}
                                                height={400}
                                                alt={project.headline_1}
                                            />
                                            <div>
                                                <h4>{project.headline_2}</h4>
                                                <h3>{project.headline_1}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: project.desc }} />
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </section>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }: Params) {
    const { student, studyProgramme } = params
    const slug = `${studyProgramme}/${student}/content.md`

    const studentContent = getStudentBySlug(slug, [
        // ! Legg til de feltene man trenger fra content.md
        "title",
        "studyProgramme",
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
    const bwu: StudentItem[] = getStudents(["studyProgramme"], "bwu")
    const bixd: StudentItem[] = getStudents(["studyProgramme"], "bixd")
    const bmed: StudentItem[] = getStudents(["studyProgramme"], "bmed")
    const students: StudentItem[] = [...bwu, ...bixd, ...bmed]

    return {
        paths: students.map((student) => {
            return {
                params: {
                    student: `${student.studyProgramme.split("/")[1]}`,
                    studyProgramme: `${student.studyProgramme.split("/")[0]}`,
                },
            }
        }),
        fallback: false,
    }
}

interface Props {
    student: StudentItem
}

interface Params {
    params: {
        student: string
        studyProgramme: string
    }
}
