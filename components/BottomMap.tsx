import Image from "next/image"
import { At, Phone, MapPin, CarProfile } from "@phosphor-icons/react"

export default function BottomMap() {
    return (
        <div className="grid md:grid-cols-2 my-4 gap-5 md:gap-14 mb-[6em] mt-[6em]">
            <div className="md:order-2">
                <h2 className="text-xl sm:text-2xl font-bold">
                    Her finner du oss!
                </h2>
                <p>
                    Vi ønsker deg hjertelig velkommen til avgangsutstillingen
                    vår, som finner sted på Mustad Næringspark i Gjøvik. Du kan
                    besøke oss på adressen Raufossvegen 40, 2821 Gjøvik. Mustad
                    Næringspark er beleilig plassert langs E6 mellom Oslo og
                    Trondheim, og er lett tilgjengelig både med bil og offentlig
                    transport. Det er dessuten kostnadsfri parkering
                    tilgjengelig på stedet.
                </p>
                <div className="flex items-center md:flex-row space-x-4 my-6">
                    <MapPin size={44} />
                    <a
                        href="https://www.google.com/maps/place/Raufossvegen+40,+2821+Gj%C3%B8vik/@60.7898446,10.6731196,17z/data=!3m1!4b1!4m6!3m5!1s0x4641da1399ad4dfd:0x9267f4261988ae38!8m2!3d60.7898446!4d10.6753083!16s%2Fg%2F11cnddg1_l"
                        target="_blank"
                        rel="noopenner norefferer"
                        className="text-md sm:text-lg font-semibold"
                    >
                        Raufossvegen 40, 2821 Gjøvik
                    </a>
                </div>
                <div className="flex items-center md:flex-row space-x-4 my-6">
                    <CarProfile size={44} />
                    <p className="text-md sm:text-lg font-semibold">
                        Det er tilgjengelig gratis parkering på Mustad
                        Næringspark.
                    </p>
                </div>
            </div>
            <a
                href="https://www.google.com/maps/place/Raufossvegen+40,+2821+Gj%C3%B8vik/@60.7898446,10.6731196,17z/data=!3m1!4b1!4m6!3m5!1s0x4641da1399ad4dfd:0x9267f4261988ae38!8m2!3d60.7898446!4d10.6753083!16s%2Fg%2F11cnddg1_l"
                target="_blank"
                rel="noopenner norefferer"
                className="text-md sm:text-lg font-semibold"
            >
                <Image
                    src="/map.jpg"
                    alt="Kart over Gjøvik/Mustad"
                    width={0}
                    height={0}
                    style={{ width: "auto", height: "auto" }}
                    className="md:order-1"
                />
            </a>
        </div>
    )
}
