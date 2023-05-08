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
                    active ? `text-${studyProgramme}` : "text-black"
                } hover:after:block`}
                href={`/${studyProgramme}`}
            >
                <div className="flex items-start">
                    <StudyProgrammeIcon
                        studyProgramme={studyProgramme}
                        active={active}
                    />
                    <span
                        className={`${
                            active
                                ? `after:bg-${studyProgramme} after:block`
                                : "after:bg-black"
                        } after:content-[""] hover:after:block after:w-full after:h-[2px] after:mt-1`}
                    >
                        {heading}
                    </span>
                </div>
            </Link>
        </>
    )
}

export default NavLink
