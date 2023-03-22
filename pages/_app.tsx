import { Montserrat } from "next/font/google"
import '../styles/globals.css'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div  className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
