import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex md:flex-row md:justify-start justify-center">
      <p>
        <Link href="/">
          <Image
            className="md:ml-[-20%]"
            src="/logo.svg"
            alt="Avgangsutstilling 2023 logo"
            width={300}
            height={300}
          />
        </Link>
      </p>
      <ul className="flex items-center space-x-10 content-left">
        <li>
          <Link className="text-orange" href="/">Om utstillingen</Link>
        </li>
        <li>
          <Link href="/bmed">Grafisk design</Link>
        </li>
        <li>
          <Link href="/bixd">Interaksjonsdesign</Link>
        </li>
        <li>
          <Link href="/bwu">Webutvikling</Link>
        </li>
      </ul>
    </nav>
  );
}
