import { useRouter } from "next/router"
import Image from "next/image"
import ResponsiveHeroBackground from "./responsiveHeroBackground"

function HeroDel(props) {
    return props.studyProgramme == "bixd" ? (
        <div className="flex justify-center items-center">
            <ResponsiveHeroBackground studyProgram="bixd" />
            <Image
                src="/svg/bixd/heading-svg.svg"
                alt="Bachelor i Interaksjonsdesign"
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
    ) : props.studyProgramme == "bwu" ? (
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
    ) : props.studyProgramme == "bmed" ? (
        <div className="flex justify-center items-center">
            <ResponsiveHeroBackground studyProgram="bmed" />
            <Image
                src="/svg/bmed/heading-svg.svg"
                alt="Bachelor i Grafisk Design"
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
    ) : (
        <div className="flex justify-center items-center">
            <ResponsiveHeroBackground studyProgram="hjem" />
            <Image
                src="/svg/hjem/heading-svg.svg"
                alt="Avgangsutstilling"
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
                Bachelor i grafisk design, interaksjonsdesign og webutvikling
                ved NTNU i Gjøvik avslutter tre års studier med en utstilling.
                Hver student viser utvalgte arbeider fra egenportefølje.
            </p>
        </div>
    )
}

export default HeroDel
