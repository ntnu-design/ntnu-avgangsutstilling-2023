import Image from "next/image"

export default function BottomMap() {
    return (
        <div className="flex flex-col-reverse md:flex-row my-4 gap-10">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22459.846322662568!2d10.662827840869888!3d60.79146064219507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641db7a7c610437%3A0x5783e79eaec830ba!2sNTNU%20Institutt%20for%20design%2C%20Gj%C3%B8vik!5e0!3m2!1sno!2sno!4v1678884205874!5m2!1sno!2sno"
                className="border-none min-h-[20rem] m-w-full flex-1"
                allow="fullscreen"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col md:w-1/2 justify-start flex-1">
                <p className="text-xl sm:text-2xl font-semibold">
                    Her finner du oss!
                </p>
                <p className="text-md sm:text-lg">
                    Velkommen til vår avgangsutstilling som holdes på Mustad
                    Næringspark i Gjøvik. Du finner oss på Raufossvegen 40, 2821
                    Gjøvik. Mustad Næringspark ligger langs E6 mellom Oslo og
                    Trondheim, og er enkelt tilgjengelig med bil eller offentlig
                    transport. Det er gratis parkering tilgjengelig på området.
                    Hvis du har spørsmål eller trenger hjelp med å finne oss,
                    kan du kontakte oss på [e-postadresse] eller
                    [telefonnummer]. Du kan også bruke kartfunksjonen på
                    nettsiden vår for å finne oss enkelt. Vi ser frem til å
                    ønske deg velkommen til vår utstilling!
                </p>
                <div className="flex md:flex-row space-x-4 my-6">
                    <Image
                        src="/location-dot.svg"
                        alt="Avgangsutstilling 2023 logo"
                        width={25}
                        height={25}
                        style={{ height: "auto", width: "auto" }}
                    />
                    <p className="text-md sm:text-lg font-semibold">
                        Raufossvegen 40, 2821 Gjøvik
                    </p>
                </div>
                <div className="flex md:flex-row space-x-4 my-6">
                    <Image
                        src="/square-parking.svg"
                        alt="Avgangsutstilling 2023 logo"
                        width={25}
                        height={25}
                        style={{ height: "auto", width: "auto" }}
                    />
                    <p className="text-md sm:text-lg font-semibold">
                        Det er tilgjengelig gratis parkering på Mustad
                        Næringspark.
                    </p>
                </div>
                <div className="flex md:flex-row space-x-4 my-6">
                    <Image
                        src="/phone.svg"
                        alt="Avgangsutstilling 2023 logo"
                        width={25}
                        height={25}
                        style={{ height: "auto", width: "auto" }}
                    />
                    <a href="tel:+4712345678">
                        <p className="text-md sm:text-lg font-semibold">
                            +47 12 345 678
                        </p>
                    </a>
                </div>
                <div className="flex md:flex-row space-x-4 my-6">
                    <Image
                        src="/Group 123.svg"
                        alt="Avgangsutstilling 2023 logo"
                        width={25}
                        height={25}
                        style={{ height: "auto", width: "auto" }}
                    />
                    <a href="mailto:kontakt@avgangsutstilling.no">
                        <p className="text-md sm:text-lg font-semibold">
                            kontakt@avgangsutstilling.no
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}
