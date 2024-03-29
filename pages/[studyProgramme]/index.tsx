import { useEffect, useState } from "react"
import { getHeading, sortStudents } from "../../lib/utils"
import Head from "next/head"
import Layout from "../../components/layout/layout"
import HeroDel from "../../components/HeroSection/HeroSection"
import Container from "../../components/layout/container"
import Image from "next/image"
import { GetStaticPaths, GetStaticPathsResult } from "next"
import type { StudyProgrammeParams } from "../../interfaces/student"
import Button from "../../components/Button"
import Cookie from "js-cookie"
import Link from "next/link"
import { allBios, Bio } from "contentlayer/generated"

export default function StudyProgrammeIndex({ students, params }: Props) {
    const { studyProgramme } = params

    const heading = getHeading(studyProgramme)
    const bwuOverlay = "bwu-overlay group-hover:opacity-30"
    const bixdOverlay = "bixd-overlay group-hover:opacity-30"
    const bmedOverlay = "bmed-overlay group-hover:opacity-30"

    const [sortOrder, setSortOrder] = useState("random")
    useEffect(() => {
        setSortOrder(Cookie.get("sortOrder") || "random")
    }, [sortOrder])

    const sortedStudents = sortStudents(students, sortOrder)

    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023 - ${heading}`}</title>
            </Head>
            <HeroDel studyProgramme={studyProgramme} />
            <Container>
                <div className="mb-[5em]">
                    <div
                        className="text-center flex row justify-center mb-[1em]"
                        style={{ gap: "15px" }}
                    >
                        <Button
                            studyProgramme={studyProgramme}
                            onButtonClick={() => (
                                setSortOrder("random"),
                                Cookie.set("sortOrder", "random")
                            )}
                            onDisabled={sortOrder === "random"}
                            isActive={sortOrder === "random"}
                        >
                            Tilfeldig
                        </Button>
                        <Button
                            studyProgramme={studyProgramme}
                            onButtonClick={() => (
                                setSortOrder("alphabetical"),
                                Cookie.set("sortOrder", "alphabetical")
                            )}
                            onDisabled={sortOrder === "alphabetical"}
                            isActive={sortOrder === "alphabetical"}
                        >
                            Alfabetisk
                        </Button>
                    </div>
                    <ul
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                        style={{ margin: "0 auto" }}
                    >
                        {sortedStudents.map((student, index) => (
                            <li
                                className={`p-5 group ${
                                    student.studyProgram === "bwu"
                                        ? "hover:text-bwu"
                                        : student.studyProgram === "bixd"
                                        ? "hover:text-bixd"
                                        : "hover:text-bmed"
                                } `}
                                key={index}
                            >
                                <Link
                                    href={`/${student.studyProgram}/${student.slug}`}
                                >
                                    <div className="relative">
                                        <Image
                                            src={`/${student.studyProgram}/${student.slug}/${student.profile_picture}`}
                                            alt={student.title}
                                            width={512}
                                            height={512}
                                            className="w-full h-auto"
                                        />
                                        <div
                                            className={
                                                student.studyProgram === "bwu"
                                                    ? bwuOverlay
                                                    : student.studyProgram ===
                                                      "bixd"
                                                    ? bixdOverlay
                                                    : bmedOverlay
                                            }
                                        ></div>
                                        <div
                                            className={
                                                student.studyProgram === "bwu"
                                                    ? "bwu-square"
                                                    : student.studyProgram ===
                                                      "bixd"
                                                    ? "bixd-triangle"
                                                    : "bmed-circle"
                                            }
                                        >
                                            <span
                                                className={
                                                    student.studyProgram ===
                                                    "bixd"
                                                        ? "text-white text-sm pt-12"
                                                        : "text-white text-sm"
                                                }
                                            >
                                                Les mer
                                            </span>
                                        </div>
                                    </div>

                                    <p className="p-2 font-bold">
                                        {student.title}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({
    params,
}: {
    params: StudyProgrammeParams
}) => {
    const { studyProgramme } = params

    const students = allBios.filter(
        (obj) => obj.studyProgram === studyProgramme
    )
    return {
        props: { students, params },
    }
}

export const getStaticPaths: GetStaticPaths =
    async function (): Promise<GetStaticPathsResult> {
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
    students: Bio[]
    params: StudyProgrammeParams
}
