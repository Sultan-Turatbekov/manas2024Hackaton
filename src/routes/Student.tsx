import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {StudentRoutes} from "@/src/routes/StudentRoutes.tsx";
import {StudentDashboard} from "@/src/pages/Student/StudentDashboard.tsx";
import {StudentRegistration} from "@/src/components/shared/StudentRegistration/StudentRegistration.tsx";

export const Student = () => {
    return (
        <Routes>
            <Route path="/" element={<StudentRoutes />}>
                <Route path='' element={<StudentDashboard />} />
                <Route path="registration" element={<StudentRegistration />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}