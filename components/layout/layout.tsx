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
            <Meta />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout
