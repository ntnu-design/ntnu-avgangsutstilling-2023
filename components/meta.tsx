import Head from "next/head"

const Meta = () => {
    return (
        <Head>
            <meta
                name="description"
                content="BBachelorutstilling i interaksjonsdesign, grafisk design og
                webutvikling ved NTNU Gjøvik markerer avslutningen på tre års
                studier. Studenter presenterer nøye utvalgte arbeider fra deres
                porteføljer, med fokus på temaet vekst og utvikling."
            />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/favicon/safari-pinned-tab.svg"
                color="#f86820"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    )
}

export default Meta
