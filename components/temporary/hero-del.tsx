import { useRouter } from "next/router"
import Image from "next/image"
import ResponsiveHeroBackground from "./responsiveHeroBackground"

function HeroDel() {
    const router = useRouter()
    return router.asPath == "/bixd" ? (
        <div>
            <Image
                className="w-full"
                src="/svg/bixd/Mac.svg"
                alt="Background image with symbols for interaction design"
                width={0}
                height={0}
                style={{
                    width: "auto",
                    height: "50vh",
                }}
            />

            {/* <div>
                <img
                    className="w-1/2 sm:w-1/3 pb-10"
                    src="/svg/bixd/heading-svg.svg"
                    alt="Image of the heading for the interaction design page"
                    style={{ top: "30%" }}
                />
                <p
                    className="mx-auto w-2/3 sm:w-1/2 text-center"
                    style={{ top: "50%" }}
                >
                    27 studenter fra Bachelor i grafisk design, 29 studenter fra
                    Bachelor interaksjonsdesign og 18 studenter fra Bachelor i
                    webutvikling ved NTNU i Gjøvik avslutter tre års studier med
                    en utstilling. Hver student viser utvalgte arbeider fra
                    egenportefølje.
                </p>
            </div> */}
        </div>
    ) : router.asPath == "/bwu" ? (
        <div className="flex justify-center items-center">
            <ResponsiveHeroBackground studyProgram="bwu" />
            <Image
                src="/svg/bwu/heading-svg.svg"
                alt="Bachelor i Webutvikling"
                width={0}
                height={0}
                style={{
                    position: "absolute",
                    width: "auto",
                    height: "auto",
                }}
                className="px-10"
            />
            <p
                style={{
                    position: "absolute",
                    width: "auto",
                    maxWidth: "800px",
                    height: "auto",
                    textAlign: "center",
                    paddingTop: "200px",
                    fontSize: "0.9em",
                }}
                className="px-10"
            >
                18 studenter fra Bachelor i webutvikling ved NTNU i Gjøvik
                avslutter tre års studier med en utstilling. Hver student viser
                utvalgte arbeider fra egenportefølje.
            </p>
        </div>
    ) : router.asPath == "/bmed" ? (
        <div className="relative pt-16 sm:pt-0">
            <img
                className="w-full"
                src="/svg/bmed/Mac.svg"
                alt="Background image with symbols for interaction design"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                    className="w-1/2 sm:w-1/3 pb-10"
                    src="/svg/bmed/heading-svg.svg"
                    alt="Image of the heading for the interaction design page"
                    style={{ top: "30%" }}
                />
                <p
                    className="mx-auto w-2/3 sm:w-1/2 text-center"
                    style={{ top: "50%" }}
                >
                    27 studenter fra Bachelor i grafisk design, 29 studenter fra
                    Bachelor interaksjonsdesign og 18 studenter fra Bachelor i
                    webutvikling ved NTNU i Gjøvik avslutter tre års studier med
                    en utstilling. Hver student viser utvalgte arbeider fra
                    egenportefølje.
                </p>
            </div>
        </div>
    ) : (
        <div className="relative pt-16 sm:pt-0">
            <img
                className="w-full"
                src="/svg/hjem/Mac.svg"
                alt="Background image with symbols for interaction design"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                    className="w-1/2 sm:w-1/3 pb-10"
                    src="/svg/hjem/heading-svg.svg"
                    alt="Image of the heading for the interaction design page"
                    style={{ top: "30%" }}
                />
                <p
                    className="mx-auto w-2/3 sm:w-1/2 text-center"
                    style={{ top: "50%" }}
                >
                    27 studenter fra Bachelor i grafisk design, 29 studenter fra
                    Bachelor interaksjonsdesign og 18 studenter fra Bachelor i
                    webutvikling ved NTNU i Gjøvik avslutter tre års studier med
                    en utstilling. Hver student viser utvalgte arbeider fra
                    egenportefølje.
                </p>
            </div>
        </div>
    )
}

export default HeroDel
