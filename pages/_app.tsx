import { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import "../styles/index.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />;
    </main>
  );
}
