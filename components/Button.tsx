import React from "react"
import { StudyProgramme } from "../interfaces/student"

const Button = ({
    studyProgramme,
    onButtonClick,
    onDisabled,
    isActive,
    children,
}: Props) => {
    console.log(studyProgramme)
    switch (studyProgramme) {
        case "bwu":
            return (
                <button
                    className={`border-2 border-bwu hover:text-white hover:bg-bwu py-2 px-8 rounded transition ${
                        isActive && "bg-bwu text-white"
                    }`}
                    onClick={onButtonClick}
                    disabled={onDisabled}
                >
                    {children}
                </button>
            )
        case "bmed":
            return (
                <button
                    className={`border-2 border-bmed hover:text-white hover:bg-bmed py-2 px-8 rounded transition ${
                        isActive && "bg-bmed text-white"
                    }`}
                    onClick={onButtonClick}
                    disabled={onDisabled}
                >
                    {children}
                </button>
            )
        case "bixd":
            return (
                <button
                    className={`border-2 border-bixd hover:text-white hover:bg-bixd py-2 px-8 rounded transition ${
                        isActive && "bg-bixd text-white"
                    }`}
                    onClick={onButtonClick}
                    disabled={onDisabled}
                >
                    {children}
                </button>
            )
        case "avgang":
            return (
                <button
                    className={`border-2 border-main hover:text-white hover:bg-main py-2 px-8 rounded transition ${
                        isActive && "bg-avgang text-white"
                    }`}
                    onClick={onButtonClick}
                    disabled={onDisabled}
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
    onButtonClick?: any
    onDisabled?: boolean
    isActive?: boolean
}
