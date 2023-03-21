import React from "react"
import { StudyProgramme } from "../interfaces/student"

const Button = ({
    studyProgramme,
    onButtonClick,
    onDisabled,
    isActive,
    tabIndex,
    children,
}: Props) => {
    switch (studyProgramme) {
        case "bwu":
            return (
                <button
                    className={`border-2 border-bwu hover:text-white hover:bg-bwu py-2 px-8 rounded transition ${
                        isActive && "bg-bwu text-white"
                    }`}
                    style={{ width: "11em" }}
                    onClick={onButtonClick}
                    disabled={onDisabled}
                    tabIndex={tabIndex}
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
                    style={{ width: "11em" }}
                    onClick={onButtonClick}
                    disabled={onDisabled}
                    tabIndex={tabIndex}
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
                    style={{ width: "11em" }}
                    onClick={onButtonClick}
                    disabled={onDisabled}
                    tabIndex={tabIndex}
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
                    tabIndex={tabIndex}
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
    tabIndex?: number
}
