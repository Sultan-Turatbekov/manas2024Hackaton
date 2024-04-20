import {Header} from "@/src/pages/Header/Header.tsx";
import {Footer} from "@/src/pages/Footer/Footer.tsx";
import {About} from "@/src/components/shared/About/About.tsx"
import {Magistr} from "@/src/components/shared/Magistr/Magistr.tsx"
import {DocumentList} from "@/src/components/shared/DocumentList/DocumentList.tsx"
export const Home = () => {

    return (
           <>
               <Header/>
               <Magistr/>
               <DocumentList/>
                <About/>
               <Footer/>
           </>
    )
}