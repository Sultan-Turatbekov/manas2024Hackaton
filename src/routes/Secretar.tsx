import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {SecretarRoutes} from "@/src/routes/SecretarRoutes.tsx";
import {StudentRequests} from "@/src/pages/Secretar/StudentRequests.tsx";
import {SecretarExam} from "@/src/pages/Secretar/SecretarExam.tsx";
import {SecretarExamDetails} from "@/src/pages/Secretar/SecretarExamDetails.tsx";

export const Secretar = () => {
    return (
        <Routes>
            <Route path="/" element={<SecretarRoutes />}>
                <Route path='requests' element={<StudentRequests/>} />
                <Route path='exams' element={<SecretarExam/>} />
                <Route path='exams/:id' element={<SecretarExamDetails/>} />
                <Route path='something' element={<SecretarExamDetails/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}