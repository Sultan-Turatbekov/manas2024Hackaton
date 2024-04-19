import {Outlet} from 'react-router-dom';
import './index.css';
import './App.css';
import {Footer} from "@/src/pages/Footer/Footer.tsx";
import { Header } from './pages/Header/Header';

export const App = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};
