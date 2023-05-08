import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"
import { CaretLeft } from "@phosphor-icons/react"
import StudyProgrammeIcon from "components/StudyProgrammeIcon"
import NavLink from "./NavLink"
import { studyProgrammeLinks } from "helpers/studyProgrammeLinks"

export default function Navbar() {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const studyProgramme = router.query.studyProgramme
    const isStudentPage = router.query.student

    useEffect(() => {
        setIsOpen(false)
    }, [studyProgramme])

    function toggle() {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="navbar-z-index">
            <Link
                className={`md:hidden flex items-center absolute py-5 px-2 hover:text-${studyProgramme}`}
                href={`/${isStudentPage ? studyProgramme : ""}`}
            >
                {(isStudentPage || studyProgramme) && <CaretLeft size={32} />}
                {(isStudentPage || studyProgramme) &&
                    (studyProgramme === "bmed" && isStudentPage
                        ? "Grafisk design"
                        : studyProgramme === "bixd" && isStudentPage
                        ? "Interaksjonsdesign"
                        : studyProgramme === "bwu" && isStudentPage
                        ? "Webutvikling"
                        : "Hjem")}
            </Link>
            <div className="w-full hidden md:flex py-5 px-10">
                <ul
                    className="flex w-full justify-between space-x-10 lg:space-x-20"
                    style={{ maxWidth: "1500px", margin: "0 auto" }}
                >
                    <li>
                        <Link
                            className={`${
                                router.asPath == "/"
                                    ? "text-main after:bg-main after:block"
                                    : "text-black after:bg-black"
                            } after:content-[""] relative after:h-[2px] `}
                            href="/"
                        >
                            Hjem
                        </Link>
                    </li>
                    <ul className="flex space-x-10 lg:space-x-20">
                        {studyProgrammeLinks.map(link => (
                            <li key={link.studyProgramme}>
                                <NavLink studyProgramme={link.studyProgramme} active={studyProgramme === link.studyProgramme} />
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
            <div className="md:hidden flex justify-end">
                <button
                    onClick={toggle}
                    className="p-2 rounded-md text-accent-7 py-5 px-4"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
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
                    ) : (
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>
            <div
                className={`${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden fixed top-0 right-0 h-screen w-full bg-white transition-transform duration-300 ease-out`}
            >
                <div className="flex justify-end">
                    <button
                        onClick={toggle}
                        className="p-2 rounded-md text-accent-7"
                        aria-expanded={isOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
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
                        ) : (
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
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="flex flex-col px-10 pt-2 space-y-4 sm:px-3">
                    <Link
                        className={`mx-2 ${
                            router.asPath == "/"
                                ? "text-main font-bold"
                                : "text-black"
                        }`}
                        href="/"
                    >
                        Hjem
                    </Link>

                    <div className="border border-gray"></div>
                    <Link
                        className={`flex ${
                            studyProgramme === "bixd"
                                ? "text-bixd font-bold"
                                : "text-black"
                        }`}
                        href="/bixd"
                    >
                        <StudyProgrammeIcon
                            studyProgramme="bixd"
                            active={studyProgramme === "bixd"}
                        />
                        Interaksjonsdesign
                    </Link>
                    <div className="border border-gray"></div>
                    <Link
                        className={`flex ${
                            studyProgramme === "bmed"
                                ? "text-bmed font-bold"
                                : "text-black"
                        }`}
                        href="/bmed"
                    >
                        <StudyProgrammeIcon
                            studyProgramme="bmed"
                            active={studyProgramme === "bmed"}
                        />
                        Grafisk design
                    </Link>
                    <div className="border border-gray"></div>
                    <Link
                        className={`flex ${
                            studyProgramme === "bwu"
                                ? "text-bwu font-bold"
                                : "text-black"
                        }`}
                        href="/bwu"
                    >
                        <StudyProgrammeIcon
                            studyProgramme="bwu"
                            active={studyProgramme === "bwu"}
                        />
                        Webutvikling
                    </Link>
                </div>
            </div>
        </nav>
    )
}
