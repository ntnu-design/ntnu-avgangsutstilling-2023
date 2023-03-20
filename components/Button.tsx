import React from "react"
import { StudyProgramme } from "../interfaces/student"

const Button = ({ studyProgramme, children }: Props) => {
    switch (studyProgramme) {
        case "bwu":
            return (
                <button
                    className={`border-2 border-bwu hover:text-white hover:bg-bwu py-2 px-8 rounded transition`}
                >
                    {children}
                </button>
            )
        case "bmed":
            return (
                <button
                    className={`border-2 border-bmed hover:text-white hover:bg-bmed py-2 px-8 rounded transition`}
                >
                    {children}
                </button>
            )
        case "bixd":
            return (
                <button
                    className={`border-2 border-bixd hover:text-white hover:bg-bixd py-2 px-8 rounded transition`}
                >
                    {children}
                </button>
            )
        case "avgang":
            return (
                <button
                    className={`border-2 border-main hover:text-white hover:bg-main py-2 px-8 rounded transition`}
                >
                    {children}
                </button>
            )
    }
}

export default Button

interface Props {
    studyProgramme: StudyProgramme
    children: React.ReactNode
}
