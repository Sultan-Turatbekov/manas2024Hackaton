import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "@/src/pages/Admin/AdminDashboard.tsx";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {AdminRoutes} from "@/src/routes/AdminRoutes.tsx";

export const Admin = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminRoutes />}>
                <Route path='' element={<AdminDashboard />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}