import Container from "./layout/container"
import { useRouter } from "next/router"

function Footer() {
    let mainBg = "bg-[#F47A43]"
    let bwuBg = "bg-[#5091CC]"
    let bixdBg = "bg-[#72AD56]"
    let bmedBg = "bg-[#D95C95]"

    const router = useRouter()
    console.log(router);
    

    return (
        <footer
            className={`flex justify-center ${
                router.query.studyProgramme == "bixd"
                    ? bixdBg
                    : router.query.studyProgramme == "bwu"
                    ? bwuBg
                    : router.query.studyProgramme == "bmed"
                    ? bmedBg
                    : mainBg
            }`}
        >
            <Container>
                <div className="py-20 flex flex-col items-center justify-center text-white">
                    <h1 className="md:text-lg sm:text-md">
                        Følg oss på våre sosiale medier!
                    </h1>
                    <div className="flex justify-center text-lg gap-7 pt-5">
                        <a
                            href="https://www.instagram.com/avgangsutstilling_ntnu/"
                            target="_blank"
                        >
                            <img src="/instagramicon.svg" alt="instagram" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
