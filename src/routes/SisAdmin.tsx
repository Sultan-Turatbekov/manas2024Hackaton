import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {SisAdminRoutes} from "@/src/routes/SisAdminRoutes.tsx";
import {SisAdminDashboard} from "@/src/pages/SisAdmin/SisAdminDashboard.tsx";

export const SisAdmin = () => {
    return (
        <Routes>
            <Route path="/" element={<SisAdminRoutes />}>
                <Route path='' element={<SisAdminDashboard/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}