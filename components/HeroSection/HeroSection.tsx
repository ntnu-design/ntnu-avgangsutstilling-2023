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
                <div className="w-[98vw] pt-[13em] sm:pt-[16em] px-10">
                    <div
                        className="flex max-w-[1050px] justify-between"
                        style={{ margin: "0 auto" }}
                    >
                        <p className="text-xl font-medium sm:text-2xl">
                            Vekst og utvikling
                        </p>
                        <p className="text-2xl sm:text-4xl font-semibold pl-10">
                            2023
                        </p>
                    </div>
                    <div
                        className="max-w-[1050px] font-medium flex justify-end"
                        style={{ margin: "0 auto" }}
                    >
                        <div className="w-[11em] pt-10">
                            <p>2. juni kl. 11–18</p>
                            <p>Formell åpning kl. 12</p>
                            <p>3. juni kl. 12–15</p>
                            <p>Mustad Næringspark</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroDel
