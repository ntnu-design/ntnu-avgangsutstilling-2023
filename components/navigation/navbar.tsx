import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  let activeLink = "text-orange font-bold";
  let inactiveLink = "text-accent-7";
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  let url = router.asPath;

  useEffect(() => {
    setIsOpen(false);
  }, [url]);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <div className="w-full hidden md:flex py-5 px-10 lg:px-20 xl:px-40 2xl:px-60 shadow-lg shadow-accent-2/75 ">
        <ul className="flex space-x-10 lg:space-x-20">
          <li>
            <Link className={router.asPath == "/" ? activeLink : inactiveLink} href="/">Hjem</Link>
          </li>
          <li>
            <Link className={`flex ${router.asPath == "/bmed" ? activeLink : inactiveLink}`} href="/bmed"><svg className="mx-2" width="20" height="20" viewBox="-1 -1 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" stroke={router.asPath == "/bmed" ? "orange" : "#313131"} stroke-width="2" fill={router.asPath == "/bmed" ? "orange" : ""} />
            </svg>

              Grafisk design</Link>
          </li>
          <li>
            <Link className={`flex ${router.asPath == "/bixd" ? activeLink : inactiveLink}`} href="/bixd"><svg className="mx-2" width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.73205 18.5L10.9697 2.5L20.2073 18.5H1.73205Z" stroke={router.asPath == "/bixd" ? "orange" : "#313131"} stroke-width="2" fill={router.asPath == "/bixd" ? "orange" : ""} />
            </svg>
              Interaksjonsdesign</Link>
          </li>
          <li>
            <Link className={`flex ${router.asPath == "/bwu" ? activeLink : inactiveLink}`} href="/bwu"><svg className="mx-2" width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1.5" width="17" height="17" stroke={router.asPath == "/bwu" ? "orange" : "#313131"} stroke-width="2" fill={router.asPath == "/bwu" ? "orange" : ""} />
            </svg>Webutvikling</Link>
          </li>
        </ul>
        <p className="ml-auto">Om utstilling</p>
      </div>
      <div className="md:hidden flex justify-end">
        <button
          onClick={toggle}
          className="p-2 rounded-md text-accent-7"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden fixed top-0 right-0 h-screen w-full bg-white transition-transform duration-300 ease-out`}
      >
        <div className="flex justify-end">
          <button
            onClick={toggle}
            className="p-2 rounded-md text-accent-7"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex flex-col px-10 pt-2 space-y-4 sm:px-3">
          <Link className={`mx-2 ${router.asPath == "/" ? activeLink : inactiveLink}`} href="/">Hjem</Link>
          <div className="border border-gray"></div>
          <Link className={`flex ${router.asPath == "/bmed" ? activeLink : inactiveLink}`} href="/bmed"><svg className="mx-2" width="20" height="20" viewBox="-1 -1 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" stroke={router.asPath == "/bmed" ? "orange" : "#313131"} stroke-width="2" fill={router.asPath == "/bmed" ? "orange" : ""} />
          </svg>

            Grafisk design</Link>
          <div className="border border-gray"></div>
          <Link className={`flex ${router.asPath == "/bixd" ? activeLink : inactiveLink}`} href="/bixd"><svg className="mx-2" width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.73205 18.5L10.9697 2.5L20.2073 18.5H1.73205Z" stroke={router.asPath == "/bixd" ? "orange" : "#313131"} stroke-width="2" fill={router.asPath == "/bixd" ? "orange" : ""} />
          </svg>
            Interaksjonsdesign</Link>
          <div className="border border-gray"></div>
          <Link className={`flex ${router.asPath == "/bwu" ? activeLink : inactiveLink}`} href="/bwu"><svg className="mx-2" width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1.5" width="17" height="17" stroke={router.asPath == "/bwu" ? "orange" : "#313131"} stroke-width="2" fill={router.asPath == "/bwu" ? "orange" : ""} />
          </svg>Webutvikling</Link>
          <div className="border border-gray"></div>
        </div>
      </div>
    </nav>
  );
}
