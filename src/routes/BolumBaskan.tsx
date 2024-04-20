import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {BolumBaskanRoutes} from "@/src/routes/BolumBaskanRoutes.tsx";
import {BolumBaskanDashboard} from "@/src/pages/SisAdmin/BolumBaskanDashboard.tsx";

export const BolumBaskan = () => {
    return (
        <Routes>
            <Route path="/" element={<BolumBaskanRoutes />}>
                <Route path='' element={<BolumBaskanDashboard/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}