import {Route, Routes} from "react-router-dom";
import {AdminDashboard} from "@/src/pages/Admin/AdminDashboard.tsx";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {AdminLogin} from "@/src/pages/Admin/AdminLogin.tsx";
import {AdminRoutes} from "@/src/routes/AdminRoutes.tsx";

export const Admin = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminRoutes />}>
                <Route path='' element={<AdminDashboard />} />
                <Route path="login" element={<AdminLogin />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}