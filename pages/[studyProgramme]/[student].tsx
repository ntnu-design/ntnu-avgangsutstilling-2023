import Head from "next/head"
import Image from "next/image"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { getStudentBySlug, getStudents } from "../../lib/api"
import Layout from "../../components/layout/layout"
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
                <title>{`Avgangsutstilling 2023 - ${student.title}`}</title>
            </Head>

            <Container>
                {router.isFallback ? (
                    <p>Loading…</p>
                ) : (
                    <>
                        <main className="h-screen">
                            <div className="flex flex-col my-6 gap-6 smd:flex-row 2xl:flex-row 2xl:pt-[6rem] ">
                                <Image
                                    src={`/${student.studyProgramme}/${student.profile_picture}`}
                                    alt={student.title}
                                    width={400}
                                    height={400}
                                />
                                <div>
                                    <p>{student.title}</p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: student.bio,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-5 pt-5 2xl:pt-0">
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
                                                    width={25}
                                                    height={25}
                                                />
                                            </a>
                                        )
                                    }
                                })}
                            </div>
                            <div className="flex justify-center invisible object-contain object-bottom smd:visible 2xl:visible 2xl:items-center">
                                <button>
                                    <a href="#prosjekter">
                                        <div className="">
                                            <Image
                                                src={"/scrollarrow.svg"}
                                                width={50}
                                                height={50}
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </button>
                            </div>
                        </main>
                        <section id="prosjekter" className="mb-12">
                            <h2 className="text-xl font-bold mb-2 ssd:mt-16 sm:mt-16 smd:mt-24 2xl:mt-[-20px] 2xl:mb-[2rem] ">
                                Prosjekter
                            </h2>
                            {studentProjects.map((project, index) => {
                                if (project.headline_1 !== "") {
                                    return (
                                        <div
                                            className="flex flex-col gap-2 pt-[1rem] smd:flex-row 2xl:flex-row mb-[6rem] invisible:border-t smd:border-t 2xl:border-t border-[#C2C2C2] 2xl:pt-[4rem]"
                                            key={index}
                                        >
                                            <hr className="border-[#C2C2C2] mb-6 2xl:my-4 " />

                                            <Image
                                                className="smd:object-contain smd:object-top 2xl:object-contain 2xl:object-top"
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
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: project.desc,
                                                    }}
                                                />
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
