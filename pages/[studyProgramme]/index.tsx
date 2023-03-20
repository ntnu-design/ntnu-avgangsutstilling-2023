import { useState } from "react"
import Link from "next/link"
import { getStudents } from "../../lib/api"
import { getHeading, sortStudents } from "../../lib/utils"
import Head from "next/head"
import Layout from "../../components/layout/layout"
import HeroDel from "../../components/temporary/hero-del"
import Container from "../../components/layout/container"
import Image from "next/image"
import { GetStaticPaths, GetStaticPathsResult } from "next"
import type {
    StudentItem,
    StudyProgrammeParams,
} from "../../interfaces/student"

export default function StudyProgrammeIndex({ students, params }: Props) {
    const { studyProgramme } = params
    const heading = getHeading(studyProgramme)
    const bwuOverlay = "bwu-overlay group-hover:opacity-30"
    const bixdOverlay = "bixd-overlay group-hover:opacity-30"
    const bmedOverlay = "bmed-overlay group-hover:opacity-30"

    const [sortOrder, setSortOrder] = useState("random")

    const sortedStudents = sortStudents(students, sortOrder)

    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023 - ${heading}`}</title>
            </Head>
            <HeroDel />
            <Container>
                <div>
                    <div>
                        <button
                            className={
                                sortOrder === "random" ? "font-bold" : ""
                            }
                            onClick={() => setSortOrder("random")}
                        >
                            Tilfeldig
                        </button>
                        <button
                            className={
                                sortOrder === "alphabetical" ? "font-bold" : ""
                            }
                            onClick={() => setSortOrder("alphabetical")}
                        >
                            Alfabetisk
                        </button>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {sortedStudents.map((student, index) => (
                            <li
                                className={`p-5 group ${
                                    student.studyProgram === "BWU"
                                        ? "hover:text-bwu"
                                        : student.studyProgram === "BIXD"
                                        ? "hover:text-bixd"
                                        : "hover:text-bmed"
                                } `}
                                key={index}
                            >
                                <Link href={`${student.studyProgramme}`}>
                                    <div className="relative">
                                        <Image
                                            src={`/${student.studyProgramme}/${student.profile_picture}`}
                                            alt={student.title}
                                            width={0}
                                            height={0}
                                            style={{
                                                width: "auto",
                                                height: "auto",
                                            }}
                                        />
                                        <div
                                            className={
                                                student.studyProgram === "BWU"
                                                    ? bwuOverlay
                                                    : student.studyProgram ===
                                                      "BIXD"
                                                    ? bixdOverlay
                                                    : bmedOverlay
                                            }
                                        ></div>
                                        <div
                                            className={
                                                student.studyProgram === "BWU"
                                                    ? "bwu-square"
                                                    : student.studyProgram ===
                                                      "BIXD"
                                                    ? "bixd-triangle"
                                                    : "bmed-circle"
                                            }
                                        >
                                            <span
                                                className={
                                                    student.studyProgram ===
                                                    "BIXD"
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
    const students = getStudents(
        // ! Her legger man til de feltene man trenger fra content.md filen
        ["title", "studyProgramme", "profile_picture", "studyProgram"],
        studyProgramme
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
    students: StudentItem[]
    params: StudyProgrammeParams
}
