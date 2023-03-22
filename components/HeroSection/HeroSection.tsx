import Image from "next/image"
import ResponsiveHeroBackground from "./responsiveHeroBackground"
import ResponsiveHeroLogo from "./responsiveHeroLogo"

function HeroDel(props) {
    return props.studyProgramme == "bixd" ? (
        <div
            className="flex justify-center items-center"
            style={{ maxWidth: "1500px", margin: "0 auto" }}
        >
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
                Bachelorutstilling i interaksjonsdesign, grafisk design og
                webutvikling ved NTNU Gjøvik markerer avslutningen på tre års
                studier. Studenter presenterer nøye utvalgte arbeider fra deres
                porteføljer, med fokus på temaet vekst og utvikling.
            </p>
        </div>
    ) : props.studyProgramme == "bwu" ? (
        <div
            className="flex justify-center items-center"
            style={{ maxWidth: "1500px", margin: "0 auto" }}
        >
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
                Bachelorutstilling i interaksjonsdesign, grafisk design og
                webutvikling ved NTNU Gjøvik markerer avslutningen på tre års
                studier. Studenter presenterer nøye utvalgte arbeider fra deres
                porteføljer, med fokus på temaet vekst og utvikling.
            </p>
        </div>
    ) : props.studyProgramme == "bmed" ? (
        <div
            className="flex justify-center items-center"
            style={{ maxWidth: "1500px", margin: "0 auto" }}
        >
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
                Bachelorutstilling i interaksjonsdesign, grafisk design og
                webutvikling ved NTNU Gjøvik markerer avslutningen på tre års
                studier. Studenter presenterer nøye utvalgte arbeider fra deres
                porteføljer, med fokus på temaet vekst og utvikling.
            </p>
        </div>
    ) : (
        <div
            className="flex justify-center items-center"
            style={{ maxWidth: "1500px", margin: "0 auto" }}
        >
            <ResponsiveHeroBackground studyProgram="hjem" />
            <ResponsiveHeroLogo studyProgram="hjem" />
            <div
                style={{
                    position: "absolute",
                    paddingTop: "auto",
                }}
            >
                <div className="w-full">
                    <div className="flex w-[60vw] justify-between">
                        <p>Vekst og utvikling</p>
                        <p>2023</p>
                    </div>
                </div>
                <p>2. juni kl. 11–18</p>
                <p>Formell åpning kl. 12</p>
                <p>3. juni kl. 12–15</p>
            </div>
        </div>
    )
}

export default HeroDel
