import { StudyProgramme } from "interfaces/student"
import { FC } from "react"

interface StudyProgrammeIconProps {
    studyProgramme: StudyProgramme
    active: boolean
}

const StudyProgrammeIcon: FC<StudyProgrammeIconProps> = ({
    studyProgramme,
    active = false,
}) => {
    return (
        <>
            {studyProgramme === "bixd" && (
                <svg
                    className="mx-2 hover:stroke-bixd"
                    width="20"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.73205 18.5L10.9697 2.5L20.2073 18.5H1.73205Z"
                        stroke={active ? "#5ca545" : "#000"}
                        strokeWidth="2"
                        fill={active ? "#5ca545" : "none"}
                    />
                </svg>
            )}
            {studyProgramme === "bmed" && (
                <svg
                    className="mx-2"
                    width="20"
                    height="20"
                    viewBox="-1 -1 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="10"
                        cy="10"
                        r="10"
                        stroke={active ? "#e45197" : "#000"}
                        strokeWidth="2"
                        fill={active ? "#e45197" : "none"}
                    />
                </svg>
            )}
            {studyProgramme === "bwu" && (
                <svg
                    className="mx-2"
                    width="20"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1"
                        y="1.5"
                        width="17"
                        height="17"
                        stroke={active ? "#508fce" : "#000"}
                        strokeWidth="2"
                        fill={active ? "#508fce" : "none"}
                    />
                </svg>
            )}
        </>
    )
}

export default StudyProgrammeIcon
