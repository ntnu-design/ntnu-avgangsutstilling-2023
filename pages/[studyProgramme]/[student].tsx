import Head from "next/head"
import Image from "next/image"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { getStudentBySlug, getStudents } from "../../lib/api"
import Layout from "../../components/layout/layout"
import Container from "../../components/layout/container"
import type { StudentItem } from "../../interfaces/student"
import {
    BehanceLogo,
    CaretDown,
    Envelope,
    Globe,
    InstagramLogo,
    LinkedinLogo,
} from "@phosphor-icons/react"

export default function Student({ student }: Props) {
    const router = useRouter()
    if (!router.isFallback && !student?.studyProgramme) {
        return <ErrorPage statusCode={404} />
    }
    const socialMediaLinks = [
        { name: "email", url: student.email },
        { name: "portfolio", url: student.portfolio },
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
                        <main>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[6em] md:flex-row">
                                <div>
                                    <Image
                                        src={`/${student.studyProgramme}/${student.profile_picture}`}
                                        alt={student.title}
                                        width={0}
                                        height={0}
                                        style={{
                                            width: "auto",
                                            height: "auto",
                                        }}
                                        priority
                                    />
                                    <div className="flex gap-2 sm:gap-5 mt-4 md:mt-6">
                                        {socialMediaLinks.map((link, index) => {
                                            if (link.url !== "") {
                                                if (link.name === "email") {
                                                    return (
                                                        <a
                                                            href={`mailto:${link.url}`}
                                                            key={index}
                                                        >
                                                            <Envelope
                                                                size={44}
                                                                className={`hover:text-${student.studyProgram.toLowerCase()} transition`}
                                                            />
                                                        </a>
                                                    )
                                                }
                                                if (link.name === "portfolio") {
                                                    return (
                                                        <a href={link.url}>
                                                            <Globe
                                                                size={44}
                                                                className={`hover:text-${student.studyProgram.toLowerCase()} transition`}
                                                            />
                                                        </a>
                                                    )
                                                } else if (
                                                    link.name === "linkedin"
                                                ) {
                                                    return (
                                                        <a href={link.url}>
                                                            <LinkedinLogo
                                                                size={44}
                                                                className={`hover:text-${student.studyProgram.toLowerCase()} transition`}
                                                            />
                                                        </a>
                                                    )
                                                } else if (
                                                    link.name === "behance"
                                                ) {
                                                    return (
                                                        <a href={link.url}>
                                                            <BehanceLogo
                                                                size={44}
                                                                className={`hover:text-${student.studyProgram.toLowerCase()} transition`}
                                                            />
                                                        </a>
                                                    )
                                                } else if (
                                                    link.name === "instagram"
                                                ) {
                                                    return (
                                                        <a href={link.url}>
                                                            <InstagramLogo
                                                                size={44}
                                                                className={`hover:text-${student.studyProgram.toLowerCase()} transition`}
                                                            />
                                                        </a>
                                                    )
                                                }
                                            }
                                        })}
                                    </div>
                                </div>

                                <div className="lg:col-span-2">
                                    <h1
                                        className={`text-2xl md:text-4xl text-${student.studyProgram.toLowerCase()} font-bold`}
                                    >
                                        {student.title}
                                    </h1>
                                    <hr className="border-gray-3 my-8 2xl:my-4 " />
                                    <p
                                        className="text-md md:text-lg max-w-[75ch]"
                                        dangerouslySetInnerHTML={{
                                            __html: student.bio,
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center invisible object-contain object-bottom smd:visible 2xl:visible 2xl:items-center">
                                <a href="#prosjekter">
                                    <div className="mt-[8em]">
                                        <CaretDown
                                            size={44}
                                            className={`text-${student.studyProgram.toLowerCase()}`}
                                        />
                                    </div>
                                </a>
                            </div>
                        </main>
                        <section id="prosjekter" className="mb-12">
                            <h2 className="text-xl font-bold mb-1 sm:mt-16 md:mt-24">
                                Prosjekter
                            </h2>
                            {studentProjects.map((project, index) => {
                                if (project.headline_1 !== "") {
                                    return (
                                        <div
                                            className="grid lg:grid-cols-2 border-t border-gray-3"
                                            key={index}
                                        >
                                            <Image
                                                className="object-contain object-center my-5 md:my-10 sm:col-span-2 sm:self-center lg:col-span-1"
                                                src={`/${student.studyProgramme}/${project.image}`}
                                                width={400}
                                                height={400}
                                                alt={project.headline_1}
                                                style={{ width: "auto" }}
                                            />

                                            <div className="mx-0 smd:mx-4 2xl:mx-12 mb-5 md:my-10">
                                                <h4 className="text-xs md:text-sm">
                                                    {project.headline_2}
                                                </h4>
                                                <h3
                                                    className={`font-bold text-xl md:text-2xl 2xl:text-4xl mb-4 text-${student.studyProgram.toLowerCase()}`}
                                                >
                                                    {project.headline_1}
                                                </h3>
                                                <p
                                                    className="text-sm md:text-md m-w-[75ch]"
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
