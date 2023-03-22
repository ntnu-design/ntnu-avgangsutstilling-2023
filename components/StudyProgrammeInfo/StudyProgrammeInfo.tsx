import Image from "next/image"
import { StudyProgramme } from "../../interfaces/student"
import { getHeading } from "../../lib/utils"
import Button from "../../components/Button"
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react"
import Link from "next/link"

const StudyProgrammeInfo = ({ studyProgramme, reverse }: Props) => {
    const heading = getHeading(studyProgramme)
    let imageSrc
    let textContent
    let textDescription
    let instaPage
    let facebookPage
    switch (studyProgramme) {
        case "bwu":
            instaPage = "https://www.instagram.com/ba_webutvikling_ntnu/"
            facebookPage = "https://www.facebook.com/webutvikling.ntnu"
            imageSrc = "/Webutvikling_hovedside.svg"
            textContent =
                "Studenter fra Bachelor i Webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser et sammendrag av sine prosjekter her. Studentene har også laget en personlig nettportefølje for å introdusere seg selv og reflektere over læringsutbyttet i ulike emner og prosjekter."
            textDescription =
                "Studentene kombinerer brukersentrerte designmetoder og web-teknologier for å løse problemer. Utstillingen inkluderer en rekke ulike arbeider fra idéskaping, konseptualisering og prototyping til utvikling og implementering."
            break
        case "bixd":
            instaPage = "https://www.instagram.com/ba_interaksjonsdesign_ntnu/"
            facebookPage = "https://www.facebook.com/interaksjonsdesign.ntnu"
            imageSrc = "/Interaksjonsdesign_hovedside.svg"
            textContent =
                "Studenter fra Bachelor i interaksjonsdesign ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Studentene har også laget en egen digital portefølje for å introdusere seg selv og reflektere over læringsutbyttet i ulike emner og prosjekter."
            textDescription =
                "Utstillingen inkluderer designarbeider for elektroniske medier, så vel som fysiske prototyper, og viser eksempler på hva studentene har jobbet med i emner som tjenestedesign, informasjonsarkitektur, tingenes web, forretningsdesign, og fysisk prototyping."
            break
        case "bmed":
            instaPage = "https://www.instagram.com/grafisk_design_ntnu/"
            facebookPage = "https://www.facebook.com/grafiskdesign.ntnu"
            imageSrc = "/GrafiskDesign_hovedside.svg"
            textContent =
                "Studenter fra Bachelor i grafisk design ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser ti utvalgte designarbeider fra egen mappe."
            textDescription =
                "Utstillingen inkluderer designarbeider for papirbaserte og elektroniske medier, samt skilt og veifinningssystemer. For eks­empel innen bedriftsprofilering, løsninger for web, mobil og nettbrett, bokdesign, tidsskriftdesign, avisdesign, kalligrafi og skriftdesign."
            break
        default:
            break
    }
    return (
        <div className="grid md:grid-cols-2 gap-2 md:gap-14 mt-[6em] md:mt-[12em]">
            <div
                className={`${
                    reverse ? "md:order-2" : "md:order-1"
                } justify-self-center self-center hidden md:block`}
            >
                <Image
                    src={imageSrc}
                    alt={heading}
                    width={0}
                    height={0}
                    style={{ width: "auto", height: "auto" }}
                />
            </div>
            <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
                <h2
                    className={`text-${studyProgramme} text-xl sm:text-2xl md:text-3xl font-bold mb-6`}
                >
                    {heading}
                </h2>
                <p className="mb-2">{textContent}</p>
                <p>{textDescription}</p>
                <div className="mt-6 flex items-center justify-between">
                    <Link href={`/${studyProgramme}`}>
                        <Button studyProgramme={studyProgramme} tabIndex={-1}>
                            Vis studenter
                        </Button>
                    </Link>

                    <div className="flex flex-row space-x-4">
                        <a
                            href={instaPage}
                            target="_blank"
                            rel="noopenner norefferer"
                        >
                            <InstagramLogo
                                size={44}
                                className={`hover:text-${studyProgramme} transition`}
                            />
                        </a>
                        <a
                            href={facebookPage}
                            target="_blank"
                            rel="noopenner norefferer"
                        >
                            <FacebookLogo
                                size={44}
                                className={`hover:text-${studyProgramme} transition`}
                            />
                        </a>
                    </div>
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
