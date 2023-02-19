import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between">
            <p><Link href="/">Logo</Link></p>
            <ul>
                <li>
                    <Link href="/bmed">
                        Grafisk design
                    </Link>
                </li>
                <li>
                    <Link href="/bixd">
                        Interaksjonsdesign
                    </Link>
                </li>
                <li>
                    <Link href="/bwu">
                        Webutvikling
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
