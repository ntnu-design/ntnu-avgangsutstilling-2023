import { useState } from "react";
import Link from "next/link"
import Image from "next/image"

import { getStudents } from "../../lib/api"
import { getHeading, sortStudents } from "../../lib/utils"
import Head from "next/head"
import Layout from "../../components/layout/layout"
import Navbar from "../../components/navigation/navbar"
import HeroDel from "../../components/temporary/hero-del"
import Container from "../../components/layout/container"
import { GetStaticPaths, GetStaticPathsResult } from "next"
import type { StudentItem, StudyProgrammeParams } from "../../interfaces/student"

export default function StudyProgrammeIndex({ students, params }: Props) {
    const { studyProgramme } = params
    const heading = getHeading(studyProgramme)

    const [sortOrder, setSortOrder] = useState("random");

    const sortedStudents = sortStudents(students, sortOrder);

    return (
        <Layout>
            <Head>
                <title>{`Avgangsutstilling 2023 - ${heading}`}</title>
            </Head>
            <Navbar />
            <HeroDel />
            <Container>
                <div>
                    <h1 className="text-xl font-bold">{heading}</h1>
                    <div>
                        <p>Sortering:</p>
                        <button className={sortOrder === "random" ? 'font-bold' : ''} onClick={() => setSortOrder("random")}>Tilfeldig</button>
                        <button className={sortOrder === "alphabetical" ? 'font-bold' : ''} onClick={() => setSortOrder("alphabetical")}>Alfabetisk</button>
                    </div>
                    <ul className="flex justify-start ..">
                        {sortedStudents.map((student, index) => (
                            <li className="p-5" key={index}>
                                <Link href={`${student.studyProgramme}`}>
                                          <Image
                                    src={`/${student.studyProgramme}/${student.profile_picture}${student.title}_${student.title}.jpg`}
                                    alt={student.title}
                                    width={400}
                                    height={400}
                                />
                                <p className="p-2">{student.title}</p>    
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
        ["title", "studyProgramme", "bio", "portfolio", "email"],
        studyProgramme,
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