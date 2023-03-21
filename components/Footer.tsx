import Container from "./layout/container"
import { useRouter } from "next/router"
import { InstagramLogo } from "@phosphor-icons/react"

function Footer() {
    const mainBg = "bg-main"
    const bwuBg = "bg-bwu"
    const bixdBg = "bg-bixd"
    const bmedBg = "bg-bmed"

    const router = useRouter()

    return (
        <footer
            className={`flex justify-center ${
                router.query.studyProgramme === "bixd"
                    ? bixdBg
                    : router.query.studyProgramme === "bwu"
                    ? bwuBg
                    : router.query.studyProgramme === "bmed"
                    ? bmedBg
                    : mainBg
            }`}
        >
            <Container>
                <div className="py-20 flex flex-col items-center justify-center text-white">
                    <h1 className="md:text-lg sm:text-md font-bold">
                        Følg oss på våre sosiale medier!
                    </h1>
                    <div className="flex justify-center text-lg gap-7 py-5 mb-5 ">
                        <a
                            href="https://www.instagram.com/avgangsutstilling_ntnu/"
                            rel="noopenner norefferer"
                            target="_blank"
                            style={{ textAlign: "center" }}
                        >
                            <InstagramLogo
                                size={64}
                                style={{ margin: "0 auto" }}
                            />
                            <span style={{ textDecoration: "underline" }}>
                                Avgangsutstilling
                            </span>
                        </a>
                    </div>
                    <div
                        className="flex flex-col md:flex-row text-center md:text-left align-between justify-between w-full items-center gap-12"
                        style={{ maxWidth: "700px" }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.2em",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.2rem",
                                }}
                                className="font-bold"
                            >
                                Facebook:
                            </span>
                            <div>
                                <a
                                    href="https://www.facebook.com/interaksjonsdesign.ntnu"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Interaksjonsdesign
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.facebook.com/grafiskdesign.ntnu"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Grafisk design
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.facebook.com/webutvikling.ntnu"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Webutvikling
                                </a>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.2em",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.2rem",
                                }}
                                className="font-bold"
                            >
                                Instagram:
                            </span>
                            <div>
                                <a
                                    href="https://www.instagram.com/ba_interaksjonsdesign_ntnu/"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Interaksjonsdesign
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.instagram.com/grafisk_design_ntnu/"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Grafisk design
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.instagram.com/ba_webutvikling_ntnu/"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Webutvikling
                                </a>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.2em",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "1.2rem",
                                }}
                                className="font-bold"
                            >
                                NTNU:
                            </span>
                            <div>
                                <a
                                    href="https://www.ntnu.no/studier/bixd"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Interaksjonsdesign
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.ntnu.no/studier/bmed"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Grafisk design
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.ntnu.no/studier/bwu"
                                    target="_blank"
                                    style={{ textDecoration: "underline" }}
                                >
                                    Webutvikling
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
