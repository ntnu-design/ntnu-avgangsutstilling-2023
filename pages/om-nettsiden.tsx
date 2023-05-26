import Container from "components/layout/container"
import Layout from "components/layout/layout"
import Head from "next/head"
import Link from "next/link"

const About = () => {
    return (
        <Layout>
            <Head>
                <title>Avgangsutstilling 2023 - Om Nettsiden</title>
            </Head>
            <Container>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 pt-10">
                    Om nettsiden
                </h1>
                <section className="mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                        Utviklingsansvarlige
                    </h2>
                    <p className="prose prose-sm lg:prose-md m-w-[75ch]">
                        Som utviklingsansvarlige har vi hatt et overordnet
                        ansvar for utviklingen av nettsiden. Vi har også bestemt
                        hvilke teknologier som ville bli brukt. Det ble valgt
                        Next.js som rammeverk sammen med contentlayer for å
                        bygge nettsiden.
                    </p>
                    <ul className="mt-4">
                        <li>
                            <Link className="underline" href="/bwu/adriannr">
                                Adrian Nysted Riise
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bwu/kristwob">
                                Kristian Wobbes
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bwu/sivansm">
                                Sivan Sabir Mahmud
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bwu/siverga">
                                Sivert Grønli Amundsen
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bwu/monsst">
                                Mons Stenbråten
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bwu/trulstp">
                                Truls Teige Pettersen
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                        Innholdsansvarlig
                    </h2>
                    <p className="prose prose-sm lg:prose-md m-w-[75ch]">
                        Som innholdsansvarlig hadde jeg ansvar for å samle inn
                        bilder og tekst fra studentene. Dette ble automatisert
                        ved hjelp av Microsoft Forms, Power Automate og
                        OneDrive, SharePoint og Teams.
                    </p>
                    <ul className="mt-4">
                        <li>
                            <Link className="underline" href="/bwu/olerr">
                                Ole Ragnar Randen
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                        Designansvarlige
                    </h2>
                    <p className="prose prose-sm lg:prose-md m-w-[75ch]">
                        Som designansvarlige hadde vi ansvar for å lage den
                        grafiske profilen til utstillingen. Den inneholder:
                        logo, fargepalett, former, typografi, trykte flater og
                        designmanual som ble brukt under utviklingen av
                        nettsiden.
                    </p>
                    <ul className="mt-4">
                        <li>
                            <Link className="underline" href="/bmed/aclukes">
                                Charlotte Fure Lukes
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bmed/idanore">
                                Ida Norevik
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bmed/theajen">
                                Thea Jenssen
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bmed/veronsae">
                                Veronica Sæthre
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                        Prototyping
                    </h2>
                    <p className="prose prose-sm lg:prose-md m-w-[75ch]">
                        Våres ansvar var å utvikle en prototype i samsvar med
                        designmanualen beskrevet i den grafiske profilen.
                    </p>
                    <ul className="mt-4">
                        <li>
                            <Link className="underline" href="/bwu/jonalh">
                                Jonas Lillebø Haugen
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bmed/alexanhl">
                                Alexander Hertzenberg Lybekk
                            </Link>
                        </li>
                        <li>
                            <Link className="underline" href="/bmed/piasth">
                                Pia Thorshaug
                            </Link>
                        </li>
                    </ul>
                </section>
            </Container>
        </Layout>
    )
}

export default About
