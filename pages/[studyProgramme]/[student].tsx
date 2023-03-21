import Head from "next/head"
import Image from "next/image"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import { getStudentBySlug, getStudents } from "../../lib/api"
import Layout from "../../components/layout/layout"
import Container from "../../components/layout/container"
import type { StudentItem, StudyProgramme } from "../../interfaces/student"
import {
    BehanceLogo,
    CaretDown,
    Envelope,
    Globe,
    InstagramLogo,
    LinkedinLogo,
    CaretLeft,
    CaretRight,
} from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { sortStudents } from "../../lib/utils"
import Cookie from "js-cookie"
import Link from "next/link"

export default function Student({ student, students }: Props) {
    const [sortedStudents, setSortedStudents] = useState([])

    useEffect(() => {
        const sortOrder =
            typeof window !== "undefined"
                ? Cookie.get("sortOrder") || "random"
                : "random"
        setSortedStudents(sortStudents(students, sortOrder))
    }, [students])

    const currentStudentIndex = sortedStudents.findIndex(
        (stud) => stud.student === student.student
    )

    const previousStudent =
        currentStudentIndex > 0 ? sortedStudents[currentStudentIndex - 1] : null
    const nextStudent =
        currentStudentIndex < sortedStudents.length - 1
            ? sortedStudents[currentStudentIndex + 1]
            : null

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
                                                            href={`mailto:${link.url}?subject=Avgangsutstilling-2023`}
                                                            key={index}
                                                            target="_blank"
                                                            rel="noopenner norefferer"
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
                                                        <a
                                                            href={link.url}
                                                            key={index}
                                                            target="_blank"
                                                            rel="noopenner norefferer"
                                                        >
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
                                                        <a
                                                            href={link.url}
                                                            key={index}
                                                            target="_blank"
                                                            rel="noopenner norefferer"
                                                        >
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
                                                        <a
                                                            href={link.url}
                                                            key={index}
                                                            target="_blank"
                                                            rel="noopenner norefferer"
                                                        >
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
                                                        <a
                                                            href={link.url}
                                                            key={index}
                                                            target="_blank"
                                                            rel="noopenner norefferer"
                                                        >
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

                            <div className="flex justify-center invisible object-contain object-bottom md:visible 2xl:visible 2xl:items-center">
                                <a href="#prosjekter">
                                    <div className="md:mt-[8em]">
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
                        <div className="flex flex-col md:flex-row w-full justify-between py-10 font-bold">
                            {previousStudent && (
                                <Link
                                    href={`/${previousStudent.studyProgramme}`}
                                    className={`hover:text-${student.studyProgram.toLowerCase()} transition flex gap-2 items-center left-item mt-4`}
                                >
                                    <CaretLeft size={44} />
                                    {previousStudent.title}
                                </Link>
                            )}
                            {nextStudent && (
                                <Link
                                    href={`/${nextStudent.studyProgramme}`}
                                    className={`hover:text-${student.studyProgram.toLowerCase()} transition flex gap-2 justify-end items-center right-item mt-4`}
                                >
                                    {nextStudent.title}
                                    <CaretRight size={44} />
                                </Link>
                            )}
                        </div>
                        {/* <a
                            href={
                                process.env.NEXT_PUBLIC_ENV === "production"
                                    ? `/${student.studyProgram.toLowerCase()}.html`
                                    : `/${student.studyProgram.toLowerCase()}`
                            }
                            className={`hover:text-${student.studyProgram.toLowerCase()} font-bold transition flex gap-2 justify-center items-center pb-10`}
                        >
                            Gå tilbake til studieprogram
                        </a> */}
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

    return {
        props: {
            student: studentContent,
            students: getStudents(
                ["title", "studyProgramme", "student"],
                studyProgramme
            ),
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
    students: StudentItem[]
}

interface Params {
    params: {
        student: string
        studyProgramme: StudyProgramme
        sortOrder: string
    }
}
