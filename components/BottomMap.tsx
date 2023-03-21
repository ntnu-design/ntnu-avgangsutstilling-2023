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
                    Velkommen til vår avgangsutstilling som holdes på Mustad
                    Næringspark i Gjøvik. Du finner oss på Raufossvegen 40, 2821
                    Gjøvik. Mustad Næringspark ligger langs E6 mellom Oslo og
                    Trondheim, og er enkelt tilgjengelig med bil eller offentlig
                    transport. Det er gratis parkering tilgjengelig på området.
                    Hvis du har spørsmål eller trenger hjelp med å finne oss,
                    kan du kontakte oss på{" "}
                    <a
                        href="mailto:anders.p.andersson@ntnu.no?subject=Avgangsutstilling-2023"
                        className="underline hover:text-main underline-offset-1"
                    >
                        anders.p.andersson@ntnu.no
                    </a>{" "}
                    eller{" "}
                    <a
                        href="tel:+4748467760"
                        className="underline hover:text-main underline-offset-1"
                    >
                        +47 48467760.
                    </a>{" "}
                    Du kan også bruke kartfunksjonen på nettsiden vår for å
                    finne oss enkelt. Vi ser frem til å ønske deg velkommen til
                    vår utstilling!
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
                <div className="flex items-center md:flex-row space-x-4 my-6">
                    <Phone size={44} />
                    <a href="tel:+4748467760">
                        <p className="text-md sm:text-lg font-semibold">
                            +47 48467760
                        </p>
                    </a>
                </div>
                <div className="flex items-center md:flex-row space-x-4 my-6">
                    <At size={44} />
                    <a href="mailto:anders.p.andersson@ntnu.no?subject=Avgangsutstilling-2023">
                        <p className="text-md sm:text-lg font-semibold">
                            anders.p.andersson@ntnu.no
                        </p>
                    </a>
                </div>
            </div>
            <Image
                src="/map.jpg"
                alt="Kart over Gjøvik/Mustad"
                width={0}
                height={0}
                style={{ width: "auto", height: "auto" }}
                className="md:order-1"
            />
        </div>
    )
}
