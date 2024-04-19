import {Header} from "./pages/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import {Footer} from "./pages/Footer/Footer.tsx";

export const App = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}