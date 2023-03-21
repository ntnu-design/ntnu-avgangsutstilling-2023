import Head from "next/head"

const Meta = () => {
    return (
        <Head>
            <meta
                name="description"
                content="27 studenter fra Bachelor i grafisk design, 29 studenter fra Bachelor interaksjonsdesign og 18 studenter fra Bachelor i webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser utvalgte arbeider fra egenportefølje."
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
