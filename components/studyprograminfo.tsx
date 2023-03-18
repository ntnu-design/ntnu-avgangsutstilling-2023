import Link from "next/link";
import Image from "next/image";


function StudyprogramInfo({ studydirection, imagestyle, imagelocation, imagealt, size, pheadstyle, studyprogram, studyprogramtext, studyprogramtext2, studybuttonstyle, page, instapage, iconalt, facebookpage, iconalt2 }) {
    return (
        <div className={studydirection}>
            <Image
                className={imagestyle}
                src={imagelocation}
                alt={imagealt}
                width={size}
                height={size}
            />
            <div className="md:w-1/2 smd:pr-[0px] md:pr-[50px]">
                <p className={pheadstyle}>
                    {studyprogram}
                </p>
                <p className="ssd:text-[12px] smd:text-[15px] text-[20px]">{studyprogramtext}</p>
                <p className="mt-5 ssd:text-[12px] smd:text-[15px] text-[20px]">{studyprogramtext2}</p>
                <button className={studybuttonstyle}><Link href={page}><p className="ssd:text-[15px] text-[20px]">Se studentene</p></Link></button>
                <div className="flex flex-row">
                <Link href={`${instapage}`}>
                    <Image
                        className="mr-5"
                        src="/instagramicon.svg"
                        alt={iconalt}
                        width={40}
                        height={40}
                    />
                    </Link>
                    <Link href={`${facebookpage}`}>
                    <Image
                        className="mr-5"
                        src="/facebookicon.svg"
                        alt={iconalt2}
                        width={40}
                        height={40}
                    />
                    </Link>
                </div>
            </div>


        </div>
    );
}

export default function HomeContent() {
    return (
        <div>
            <StudyprogramInfo
                studydirection={"flex ssd:flex-col sm:flex-col md:flex-row md:justify-around ssd:my-32 sm:my-32 md:my-52 ssd:w-full "}
                imagestyle={"ssd:mx-auto sm:mx-auto ssd:my-16 sm:my-20"}
                imagelocation={"/Interaksjonsdesign_hovedside.svg"}
                imagealt={"Interaksjonsdesign square of icons"}
                size={300}
                pheadstyle={"ssd:text-[30px] smd:text-[30px] text-[40px] text-[#72ad56] font-extrabold"}
                studyprogram={'Interaksjonsdesign'}
                studyprogramtext={'28 studenter fra Bachelor i interaksjonsdesign ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Studentene har også laget en egen digital portefølje for å introdusere seg selv og reflektere over læringsutbyttet i ulike emner og prosjekter.'}
                studyprogramtext2={'Utstillingen inkluderer designarbeider for elektroniske medier, så vel som fysiske prototyper, og viser eksempler på hva studentene har jobbet med i emner som tjenestedesign, informasjonsarkitektur, tingenes web, forretningsdesign, og fysisk prototyping.'}
                studybuttonstyle={"border-2 border-[#72ad56] hover:bg-[#72ad56] hover:text-[#FFFFFF] rounded my-5 py-2 px-8"}
                page={"/bixd"}
                instapage={"https://www.instagram.com/ba_interaksjonsdesign_ntnu/"}
                iconalt={"Link to the Instagram account for Interaksjonsdesign"}
                facebookpage={"https://www.facebook.com/interaksjonsdesign.ntnu"}
                iconalt2={"Link to the Facebook account for Interaksjonsdesign"}
            />

            <StudyprogramInfo
                studydirection={"flex ssd:flex-col sm:flex-col md:flex-row-reverse md:justify-around ssd:my-32 sm:my-32 md:my-52"}
                imagestyle={"ssd:mx-auto sm:mx-auto ssd:my-16 sm:my-20"}
                imagelocation={"/GrafiskDesign_hovedside.svg"}
                imagealt={"Grafisk design square of icons"}
                size={300}
                pheadstyle={"ssd:text-[30px] smd:text-[30px] text-[40px] text-[#d15b96] font-extrabold"}
                studyprogram={'Grafisk Design'}
                studyprogramtext={'27 studenter fra Bachelor i grafisk design ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser ti utvalgte designarbeider fra egen mappe.'}
                studyprogramtext2={'Utstillingen inkluderer designarbeider for papirbaserte og elektroniske medier, samt skilt og veifinningssystemer. For eks­empel innen bedriftsprofilering, løsninger for web, mobil og nettbrett, bokdesign, tidsskriftdesign, avisdesign, kalligrafi og skriftdesign.'}
                studybuttonstyle={"border-2 border-[#d15b96] hover:bg-[#d15b96] hover:text-[#FFFFFF] rounded my-5 py-2 px-8"}
                page={"/bmed"}
                instapage={"https://www.instagram.com/grafisk_design_ntnu/"}
                iconalt={"Link to the Instagram account for Grafisk Design"}
                facebookpage={"https://www.facebook.com/grafiskdesign.ntnu"}
                iconalt2={"Link to the Facebook account for Grafisk Design"}
            />

            <StudyprogramInfo
                studydirection={"flex ssd:flex-col sm:flex-col md:flex-row md:justify-around ssd:my-32 sm:my-32 md:my-52"}
                imagestyle={"ssd:mx-auto sm:mx-auto ssd:my-16 sm:my-20"}
                imagelocation={"/Webutvikling_hovedside.svg"}
                imagealt={"Webutvikling square of icons"}
                size={300}
                pheadstyle={"ssd:text-[30px] smd:text-[30px] text-[40px] text-[#5a92ce] font-extrabold"}
                studyprogram={'Webutvikling'}
                studyprogramtext={'18 studenter fra Bachelor i Webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser et sammendrag av sine prosjekter her. Studentene har også laget en personlig nettportefølje for å introdusere seg selv og reflektere over læringsutbyttet i ulike emner og prosjekter.'}
                studyprogramtext2={'Studentene kombinerer brukersentrerte designmetoder og web-teknologier for å løse problemer. Utstillingen inkluderer en rekke ulike arbeider fra idéskaping, konseptualisering og prototyping til utvikling og implementering.'}
                studybuttonstyle={"border-2 border-[#5a92ce] hover:bg-[#5a92ce] hover:text-[#FFFFFF] rounded my-5 py-2 px-8"}
                page={"/bwu"}
                instapage={"https://www.instagram.com/ba_webutvikling_ntnu/"}
                iconalt={"Link to the Instagram account for Webutvikling"}
                facebookpage={"https://www.facebook.com/webutvikling.ntnu"}
                iconalt2={"Link to the Facebook account for Webutvikling"}
            />
        </div>
    );

}