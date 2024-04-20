import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {SecretarRoutes} from "@/src/routes/SecretarRoutes.tsx";
import {StudentRequests} from "@/src/pages/Secretar/StudentRequests.tsx";
import {SecretarExam} from "@/src/pages/Secretar/SecretarExam.tsx";

export const Secretar = () => {
    return (
        <Routes>
            <Route path="/" element={<SecretarRoutes />}>
                <Route path='/requests' element={<StudentRequests/>} />
                <Route path='/exams' element={<SecretarExam/>} />
                <Route path='/something' element={<SecretarExam/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}