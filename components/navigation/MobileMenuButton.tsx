import React, { FC } from "react"

interface MobileMenuButtonProps {
    isOpen: boolean
    onClick: () => void
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({ isOpen, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="p-2 rounded-md text-accent-7 py-5 px-4"
            aria-expanded={isOpen ? "true" : "false"}
        >
            <span className="sr-only">Åpne hovedmenyen</span>
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
    )
}

export default MobileMenuButton
