import Image from "next/image"
import { StudyProgramme } from "../../interfaces/student"
import { getHeading } from "../../lib/utils"
import Link from "next/link"
import Button from "../Button"

const StudyProgrammeInfo = ({ studyProgramme, reverse }: Props) => {
    const heading = getHeading(studyProgramme)
    let imageSrc
    let textContent
    let textDescription
    switch (studyProgramme) {
        case "bwu":
            imageSrc = "/Webutvikling_hovedside.svg"
            textContent =
                "18 studenter fra Bachelor i Webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser et sammendrag av sine prosjekter her. Studentene har også laget en personlig nettportefølje for å introdusere seg selv og reflektere over læringsutbyttet i ulike emner og prosjekter."
            textDescription =
                "Studentene kombinerer brukersentrerte designmetoder og web-teknologier for å løse problemer. Utstillingen inkluderer en rekke ulike arbeider fra idéskaping, konseptualisering og prototyping til utvikling og implementering."
            break
        case "bixd":
            imageSrc = "/Interaksjonsdesign_hovedside.svg"
            textContent =
                "28 studenter fra Bachelor i interaksjonsdesign ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Studentene har også laget en egen digital portefølje for å introdusere seg selv og reflektere over læringsutbyttet i ulike emner og prosjekter."
            textDescription =
                "Utstillingen inkluderer designarbeider for elektroniske medier, så vel som fysiske prototyper, og viser eksempler på hva studentene har jobbet med i emner som tjenestedesign, informasjonsarkitektur, tingenes web, forretningsdesign, og fysisk prototyping."
            break
        case "bmed":
            imageSrc = "/GrafiskDesign_hovedside.svg"
            textContent =
                "27 studenter fra Bachelor i grafisk design ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser ti utvalgte designarbeider fra egen mappe."
            textDescription =
                "Utstillingen inkluderer designarbeider for papirbaserte og elektroniske medier, samt skilt og veifinningssystemer. For eks­empel innen bedriftsprofilering, løsninger for web, mobil og nettbrett, bokdesign, tidsskriftdesign, avisdesign, kalligrafi og skriftdesign."
            break
        default:
            break
    }
    return (
        <div>
            <div
                className={
                    /* `flex flex-col justify-center items-center ${
                    reverse ? "md:flex-row-reverse" : "md:flex-row"
                } md:justify-between` */ `grid md:grid-cols-2`
                }
            >
                <Image
                    src={imageSrc}
                    alt={heading}
                    width={0}
                    height={0}
                    style={{ width: "auto", height: "auto" }}
                />
                <div className={``}>
                    <h2
                        className={`text-${studyProgramme} text-xl sm:text-2xl md:text-3xl font-bold mb-2`}
                    >
                        {heading}
                    </h2>
                    <p className="mb-2">{textContent}</p>
                    <p>{textDescription}</p>
                </div>
            </div>
            <div>
                <Button studyProgramme={studyProgramme}>
                    <Link href={`/${studyProgramme}`}>Vis studenter</Link>
                </Button>

                <div className="flex flex-row mt-4">
                    <Link href="">
                        <Image
                            className="mr-5"
                            src="/instagramicon.svg"
                            alt={""}
                            width={0}
                            height={0}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            className="mr-5"
                            src="/facebookicon.svg"
                            alt={""}
                            width={0}
                            height={0}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StudyProgrammeInfo

interface Props {
    studyProgramme: StudyProgramme
    reverse: Boolean
}
