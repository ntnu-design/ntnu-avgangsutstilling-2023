import Image from "next/image"
import ResponsiveHeroBackground from "./responsiveHeroBackground"
import ResponsiveHeroLogo from "./responsiveHeroLogo"

function HeroDel(props) {
    return props.studyProgramme == "bixd" ? (
        <div className="flex justify-center items-center">
            <ResponsiveHeroBackground studyProgram="bixd" />
            <ResponsiveHeroLogo studyProgram="bixd" />
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
                Studenter fra Bachelor interaksjonsdesign ved NTNU i Gjøvik
                avslutter tre års studier med en utstilling. Hver student viser
                utvalgte arbeider fra egenportefølje.
            </p>
        </div>
    ) : props.studyProgramme == "bwu" ? (
        <div className="flex justify-center items-center">
            <ResponsiveHeroBackground studyProgram="bwu" />
            <Image
                src="/svg/bwu/heading.svg"
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
                Studenter fra Bachelor i webutvikling ved NTNU i Gjøvik
                avslutter tre års studier med en utstilling. Hver student viser
                utvalgte arbeider fra egenportefølje.
            </p>
        </div>
    ) : props.studyProgramme == "bmed" ? (
        <div className="flex justify-center items-center">
            <ResponsiveHeroBackground studyProgram="bmed" />
            <ResponsiveHeroLogo studyProgram="bmed" />
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
                Studenter fra Bachelor i grafisk design ved NTNU i Gjøvik
                avslutter tre års studier med en utstilling. Hver student viser
                utvalgte arbeider fra egenportefølje.
            </p>
        </div>
    ) : (
        <div className="flex justify-center items-center">
            <ResponsiveHeroBackground studyProgram="hjem" />
            <ResponsiveHeroLogo studyProgram="hjem" />
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
