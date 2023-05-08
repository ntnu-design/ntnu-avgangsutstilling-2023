import React, { FC } from "react"
import Link from "next/link"
import { NextRouter } from "next/router"
import StudyProgrammeIcon from "components/StudyProgrammeIcon"
import { studyProgrammeLinks } from "helpers/studyProgrammeLinks"
import { StudyProgramme } from "interfaces/student"

interface MobileMenuProps {
    isOpen: boolean
    onClick: () => void
    studyProgramme: StudyProgramme
    router: NextRouter
}

const MobileMenu: FC<MobileMenuProps> = ({
    isOpen,
    onClick,
    studyProgramme,
    router,
}) => {
    return (
        <div
            className={`${
                isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden fixed top-0 right-0 h-screen w-full bg-white transition-transform duration-300 ease-out`}
        >
            <div className="flex justify-end">
                <button
                    onClick={onClick}
                    className="p-2 rounded-md text-accent-7"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Close main menu</span>
                    <svg
                        className="block h-10 w-10"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col px-10 pt-2 space-y-4 sm:px-3">
                <Link
                    className={`mx-2 ${
                        router.asPath === "/"
                            ? "text-main font-bold"
                            : "text-black"
                    }`}
                    href="/"
                >
                    Hjem
                </Link>
                {studyProgrammeLinks.map((prog) => (
                    <>
                        <div className="border border-gray"></div>
                        <Link
                            className={`flex ${
                                studyProgramme === prog.studyProgramme
                                    ? `text-${prog.studyProgramme} font-bold`
                                    : "text-black"
                            }`}
                            href={`/${prog.studyProgramme}`}
                        >
                            <StudyProgrammeIcon
                                studyProgramme={prog.studyProgramme}
                                active={studyProgramme === prog.studyProgramme}
                            />
                            {prog.studyProgramme === "bixd"
                                ? "Interaksjonsdesign"
                                : prog.studyProgramme === "bmed"
                                ? "Grafisk design"
                                : "Webutvikling"}
                        </Link>
                    </>
                ))}
            </div>
        </div>
    )
}

export default MobileMenu
