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
    const baseClassName = `border-2 py-2 px-8 rounded transition`
    let borderColor, hoverColor

    switch (studyProgramme) {
        case "bwu":
            borderColor = "border-bwu"
            hoverColor = "hover:bg-bwu hover:text-white"
            break
        case "bmed":
            borderColor = "border-bmed"
            hoverColor = "hover:bg-bmed hover:text-white"
            break
        case "bixd":
            borderColor = "border-bixd"
            hoverColor = "hover:bg-bixd hover:text-white"
            break
        case "avgang":
            borderColor = "border-main"
            hoverColor = "hover:bg-main hover:text-white"
            break
    }

    const buttonClassName = `${baseClassName} ${borderColor} ${hoverColor} ${
        isActive ? `bg-${studyProgramme} text-white` : ""
    }`

    return (
        <button
            className={buttonClassName}
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
