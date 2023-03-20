import React, { useEffect, useState } from "react"
import Image from "next/image"

const ResponsiveHeroBackground = (props) => {
    const [imageSrc, setImageSrc] = useState(
        `/svg/${props.studyProgram}/Mobil.svg`
    )
    console.log(props.studyProgram)
    const updateImageSrc = () => {
        const screenWidth = window.innerWidth

        if (screenWidth <= 680) {
            setImageSrc(`/svg/${props.studyProgram}/Mobil.svg`)
        } else if (screenWidth <= 768) {
            setImageSrc(`/svg/${props.studyProgram}/LrgMobil.svg`)
        } else if (screenWidth <= 992) {
            setImageSrc(`/svg/${props.studyProgram}/Tablet.svg`)
        } else if (screenWidth <= 1200) {
            setImageSrc(`/svg/${props.studyProgram}/iPad.svg`)
        } else {
            setImageSrc(`/svg/${props.studyProgram}/Mac.svg`)
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
            alt="Background image"
            width={0}
            height={0}
            object-fit="contain"
            style={{
                width: "auto",
                height: "60vh",
            }}
            sizes="(max-width: 480px) 100vw,
             (max-width: 768px) 100vw,
             (max-width: 992px) 100vw,
             (max-width: 1200px) 100vw,
             100vw"
        />
    )
}

export default ResponsiveHeroBackground
