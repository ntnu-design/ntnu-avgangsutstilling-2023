import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from "next/link"
import { CaretLeft } from "@phosphor-icons/react"
import NavLink from "./NavLink"
import { studyProgrammeLinks } from "helpers/studyProgrammeLinks"
import MobileMenuButton from "./MobileMenuButton"
import MobileMenu from "./MobileMenu"
import { StudyProgramme } from "interfaces/student"

export default function Navbar() {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const studyProgramme = router.query.studyProgramme as StudyProgramme
    const isStudentPage = router.query.student

    useEffect(() => {
        setIsOpen(false)
    }, [studyProgramme])

    function toggle() {
        setIsOpen((prev) => !prev)
    }

    const getTitle = (studyProgramme: StudyProgramme, isStudentPage: string | string[]) => {
        if (studyProgramme === "bmed" && isStudentPage) return "Grafisk design"
        if (studyProgramme === "bixd" && isStudentPage)
            return "Interaksjonsdesign"
        if (studyProgramme === "bwu" && isStudentPage) return "Webutvikling"
        return "Hjem"
    }

    return (
        <nav className="navbar-z-index">
            {(isStudentPage || studyProgramme) && (
                <Link
                    className={`md:hidden flex items-center absolute py-5 px-2 hover:text-${studyProgramme}`}
                    href={`/${isStudentPage ? studyProgramme : ""}`}
                >
                    <CaretLeft size={32} />
                    {getTitle(studyProgramme, isStudentPage)}
                </Link>
            )}
            <div className="w-full hidden md:flex py-5 px-10">
                <ul
                    className="flex w-full justify-between space-x-10 lg:space-x-20"
                    style={{ maxWidth: "1500px", margin: "0 auto" }}
                >
                    <li>
                        <Link
                            className={`${
                                router.asPath === "/"
                                    ? "text-main after:bg-main underline underline-offset-8"
                                    : "text-black after:bg-black"
                            } hover:underline underline-offset-8`}
                            href="/"
                        >
                            Hjem
                        </Link>
                    </li>
                    <ul className="flex space-x-10 lg:space-x-20">
                        {studyProgrammeLinks.map((link) => (
                            <li key={link.studyProgramme}>
                                <NavLink
                                    studyProgramme={link.studyProgramme}
                                    active={
                                        studyProgramme === link.studyProgramme
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
            <div className="md:hidden flex justify-end">
                <MobileMenuButton isOpen={isOpen} onClick={toggle} />
            </div>
            <MobileMenu
                isOpen={isOpen}
                onClick={toggle}
                studyProgramme={studyProgramme}
                router={router}
            />
        </nav>
    )
}
