import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Container from "../layout/container"

export default function Navbar() {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const studyProgramme = router.query.studyProgramme

    useEffect(() => {
        setIsOpen(false)
    }, [studyProgramme])

    function toggle() {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="navbar-z-index">
            <div className="w-full hidden md:flex py-5 px-10 lg:px-20 xl:px-40 2xl:px-60">
                <ul className="flex w-full justify-between space-x-10 lg:space-x-20">
                    <li>
                        <Link
                            className={`${
                                router.asPath == "/"
                                    ? "text-main after:bg-main after:block"
                                    : "text-black after:bg-black"
                            } after:content-[""] hover:after:block after:w-full after:h-[2px] after:mt-1`}
                            href="/"
                        >
                            Hjem
                        </Link>
                    </li>
                    <div className="flex space-x-10 lg:space-x-20">
                        <li>
                            <Link
                                className={`${
                                    studyProgramme === "bmed"
                                        ? "text-bmed"
                                        : "text-black"
                                } hover:after:block`}
                                href={
                                    process.env.NEXT_PUBLIC_ENV === "production"
                                        ? "/bmed.html"
                                        : "/bmed"
                                }
                            >
                                <div className="flex items-start">
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
                                            stroke={
                                                studyProgramme === "bmed"
                                                    ? "#e45197"
                                                    : "#000"
                                            }
                                            strokeWidth="2"
                                            fill={
                                                studyProgramme === "bmed"
                                                    ? "#e45197"
                                                    : "none"
                                            }
                                        />
                                    </svg>
                                    <span
                                        className={`${
                                            studyProgramme === "bmed"
                                                ? "after:bg-bmed after:block"
                                                : "after:bg-black"
                                        } after:content-[""] hover:after:block after:w-full after:h-[2px] after:mt-1`}
                                    >
                                        Grafisk design
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${
                                    studyProgramme === "bixd"
                                        ? "text-bixd"
                                        : "text-black"
                                }`}
                                href={
                                    process.env.NEXT_PUBLIC_ENV === "production"
                                        ? "/bixd.html"
                                        : "/bixd"
                                }
                            >
                                <div className="flex items-start">
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
                                            stroke={
                                                studyProgramme === "bixd"
                                                    ? "#5ca545"
                                                    : "#000"
                                            }
                                            strokeWidth="2"
                                            fill={
                                                studyProgramme === "bixd"
                                                    ? "#5ca545"
                                                    : "none"
                                            }
                                        />
                                    </svg>
                                    <span
                                        className={`${
                                            studyProgramme === "bixd"
                                                ? "after:bg-bixd after:block"
                                                : "after:bg-black"
                                        } after:content-[""] hover:after:block after:w-full after:h-[2px] after:mt-1`}
                                    >
                                        Interaksjonsdesign
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`flex ${
                                    studyProgramme === "bwu"
                                        ? "text-bwu"
                                        : "text-black"
                                }`}
                                href={
                                    process.env.NEXT_PUBLIC_ENV === "production"
                                        ? "/bwu.html"
                                        : "/bwu"
                                }
                            >
                                <div className="flex items-start">
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
                                            stroke={
                                                studyProgramme === "bwu"
                                                    ? "#508fce"
                                                    : "#000"
                                            }
                                            strokeWidth="2"
                                            fill={
                                                studyProgramme === "bwu"
                                                    ? "#508fce"
                                                    : "none"
                                            }
                                        />
                                    </svg>
                                    <span
                                        className={`${
                                            studyProgramme === "bwu"
                                                ? "after:bg-bwu after:block"
                                                : "after:bg-black"
                                        } after:content-[""] hover:after:block after:w-full after:h-[2px] after:mt-1`}
                                    >
                                        Webutvikling
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="md:hidden flex justify-end">
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
                            studyProgramme === "bmed"
                                ? "text-bmed font-bold"
                                : "text-black"
                        }`}
                        href={
                            process.env.NEXT_PUBLIC_ENV === "production"
                                ? "/bmed.html"
                                : "/bmed"
                        }
                    >
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
                                stroke={
                                    studyProgramme === "bmed"
                                        ? "#e45197"
                                        : "#000"
                                }
                                strokeWidth="2"
                                fill={
                                    studyProgramme === "bmed"
                                        ? "#e45197"
                                        : "none"
                                }
                            />
                        </svg>
                        Grafisk design
                    </Link>
                    <div className="border border-gray"></div>
                    <Link
                        className={`flex ${
                            studyProgramme === "bixd"
                                ? "text-bixd font-bold"
                                : "text-black"
                        }`}
                        href={
                            process.env.NEXT_PUBLIC_ENV === "production"
                                ? "/bixd.html"
                                : "/bixd"
                        }
                    >
                        <svg
                            className="mx-2"
                            width="20"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.73205 18.5L10.9697 2.5L20.2073 18.5H1.73205Z"
                                stroke={
                                    studyProgramme === "bixd"
                                        ? "#5ca545"
                                        : "#000"
                                }
                                strokeWidth="2"
                                fill={
                                    studyProgramme === "bixd"
                                        ? "#5ca545"
                                        : "none"
                                }
                            />
                        </svg>
                        Interaksjonsdesign
                    </Link>
                    <div className="border border-gray"></div>
                    <Link
                        className={`flex ${
                            studyProgramme === "bwu"
                                ? "text-bwu font-bold"
                                : "text-black"
                        }`}
                        href={
                            process.env.NEXT_PUBLIC_ENV === "production"
                                ? "/bwu.html"
                                : "/bwu"
                        }
                    >
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
                                stroke={
                                    studyProgramme === "bwu"
                                        ? "#508fce"
                                        : "#000"
                                }
                                strokeWidth="2"
                                fill={
                                    studyProgramme === "bwu"
                                        ? "#508fce"
                                        : "none"
                                }
                            />
                        </svg>
                        Webutvikling
                    </Link>
                </div>
            </div>
        </nav>
    )
}
