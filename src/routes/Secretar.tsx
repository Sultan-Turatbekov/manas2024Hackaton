import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {SecretarRoutes} from "@/src/routes/SecretarRoutes.tsx";
import {SecretarDashboard} from "@/src/pages/Secretar/SecretarDashboard.tsx";

export const Secretar = () => {
    return (
        <Routes>
            <Route path="/" element={<SecretarRoutes />}>
                <Route path='' element={<SecretarDashboard/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}