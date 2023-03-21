import React, { useEffect, useState } from "react"
import Image from "next/image"

const ResponsiveHeroLogo = (props) => {
    const [imageSrc, setImageSrc] = useState(
        `/svg/${props.studyProgram}/heading.svg`
    )

    const updateImageSrc = () => {
        const screenWidth = window.innerWidth

        if (screenWidth <= 490) {
            setImageSrc(`/svg/${props.studyProgram}/heading-2.svg`)
        } else {
            setImageSrc(`/svg/${props.studyProgram}/heading.svg`)
        }
    }

    useEffect(() => {
        updateImageSrc()
        window.addEventListener("resize", updateImageSrc)

        return () => {
            window.removeEventListener("resize", updateImageSrc)
        }
    }, [props.studyProgram])
    return (
        <Image
            src={imageSrc}
            alt={
                props.studyProgram === "bixd"
                    ? "Bachelor i Interaksjonsdesign"
                    : props.studyProgram === "bmed"
                    ? "Bachelor i Grafisk design"
                    : "Avgangsutstilling"
            }
            width={0}
            height={0}
            style={{
                position: "absolute",
                width: "auto",
                height: "auto",
            }}
            className="px-10 pb-20 smm:pb-0"
        />
    )
}

export default ResponsiveHeroLogo
