import { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import "../styles/index.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />;
    </main>
  );
}
