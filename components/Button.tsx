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
    const baseClasses = `border-2 py-2 px-8 rounded transition ${
        isActive ? "text-white" : ""
    }`

    const borderColorClass = `border-${studyProgramme}`
    const hoverClass = `hover:text-white hover:bg-${studyProgramme}`
    const activeClass = isActive ? `bg-${studyProgramme}` : ""

    return (
        <button
            className={`${baseClasses} ${borderColorClass} ${hoverClass} ${activeClass}`}
            style={{ width: "11em" }}
            onClick={onButtonClick}
            disabled={onDisabled}
            tabIndex={tabIndex}
        >
            {children}
        </button>
    )
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
