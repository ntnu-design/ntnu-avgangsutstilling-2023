/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                black: "#000000",
                white: "#FFFFFF",
                "gray-1": "#50545b",
                "gray-2": "#878f9b",
                "gray-3": "#b9bfc7",
                main: "#f86820",
                bwu: "#508fce",
                bmed: "#e45197",
                bixd: "#5ca545",
            },
            spacing: {
                28: "7rem",
            },
            letterSpacing: {
                tighter: "-.04em",
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "2.75rem",
                "7xl": "4.5rem",
                "8xl": "6.25rem",
            },
            boxShadow: {
                sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
                md: "0 8px 30px rgba(0, 0, 0, 0.12)",
            },
            screens: {
                smd: { min: "768px", max: "1536px" },
            },
            backgroundImage: {
                "hero-delbixd": "/svg/bixd/Mac.svg",
                "hero-delbwu": "/svg/bwu/Mac.svg",
                "hero-delbmed": "/svg/bmed/Mac.svg",
                "hero-delhjem": "/svg/bixd/Mac.svg",
            },
        },
    },
    plugins: [],
}
