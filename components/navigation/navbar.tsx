import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  //receive props from parent component for styling active link
  let activeLink = "text-orange font-bold";
  let inactiveLink = "text-accent-7";
  
  return (
    <nav className="w-full hidden lg:flex py-5 lg:px-20 xl:px-40 2xl:px-60 shadow-lg shadow-accent-2/75 ">
      <ul className="flex space-x-20">
        <li>
          <Link className="text-orange" href="/">Hjem</Link>
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
      <p className="ml-auto">Om utstilling</p>
    </nav>
  );
}
