import Footer from "../Footer"
import Navbar from "../navigation/navbar"
import Meta from "../meta"

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <a href="#main" className="skip-to-main-content-link">
                Hopp til hovedinnhold
            </a>
            <Meta />
            <Navbar />
            <div id="main">{children}</div>
            <Footer />
        </>
    )
}

export default Layout
