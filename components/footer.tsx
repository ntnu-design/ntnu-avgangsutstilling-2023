import Container from "./layout/container"
import { IconContext } from "react-icons"
import { FaFacebook } from "react-icons/fa"
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Footer() {
    let mainBg = "bg-[#F47A43]"
    let bwuBg = "bg-[#5091CC]"
    let bixdBg = "bg-[#72AD56]"
    let bmedBg = "bg-[#D95C95]"

    const router = useRouter()

    return (
        <footer
            className={`flex justify-center ${
                router.asPath == "/bixd" ? bixdBg : 
                router.asPath == "/bwu" ? bwuBg : 
                router.asPath == "/bmed" ? bmedBg : mainBg
            }`}
        >
            <Container>
                <IconContext.Provider value={{ color: "white" }}>
                    <div className="py-20 flex flex-col items-center justify-center">
                        <h1 className="md:text-lg sm:text-md text-white">
                            Følg oss på våre sosiale medier!
                        </h1>
                        <div className="flex justify-center text-lg gap-7 pt-5">
                            <a href="https://" target="_blank">
                                <FaFacebook size={30} />
                            </a>
                            <a
                                href="https://www.instagram.com/avgangsutstilling_ntnu/"
                                target="_blank"
                            >
                                <BsInstagram size={30} />
                            </a>
                            <a href="http://" target="_blank">
                                <BsTwitter size={30} />
                            </a>
                            <a href="http://" target="_blank">
                                <BsLinkedin size={30} />
                            </a>
                        </div>
                        <div></div>
                    </div>
                </IconContext.Provider>
                ;
            </Container>
        </footer>
    )
}

export default Footer
