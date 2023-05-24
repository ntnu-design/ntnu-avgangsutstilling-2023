import StudyProgrammeIcon from "components/StudyProgrammeIcon"
import { StudyProgramme } from "interfaces/student"
import { getHeading } from "lib/utils"
import Link from "next/link"
import { FC } from "react"

interface NavLinkProps {
    studyProgramme: StudyProgramme
    active: boolean
}

const NavLink: FC<NavLinkProps> = ({ studyProgramme, active }) => {
    const heading = getHeading(studyProgramme)
    return (
        <>
            <Link
                className={`${
                    active
                        ? studyProgramme === "bwu"
                            ? "text-bwu"
                            : studyProgramme === "bixd"
                            ? "text-bixd"
                            : studyProgramme === "bmed"
                            ? "text-bmed"
                            : "text-black"
                        : "text-black"
                }`}
                href={`/${studyProgramme}`}
            >
                <div className="flex items-start">
                    <StudyProgrammeIcon
                        studyProgramme={studyProgramme}
                        active={active}
                    />
                    <span
                        className={`${
                            active ? "underline underline-offset-8" : ""
                        } hover:underline underline-offset-8`}
                    >
                        {heading}
                    </span>
                </div>
            </Link>
        </>
    )
}

export default NavLink
