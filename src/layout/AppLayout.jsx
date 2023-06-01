import Main from "./Main"
import NavMenu from "./NavMenu"
import Footer from "./Footer"

export default function AppLayout( {childen} ){
    return(
        <>
        <NavMenu />
        <Main />
        {childen}
        <Footer />
        </>
    )
}