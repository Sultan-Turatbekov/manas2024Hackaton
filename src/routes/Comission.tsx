import {Route, Routes} from "react-router-dom";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {ComissionRoutes} from "@/src/routes/ComissionRoutes.tsx";
import {ComissionDashBoard} from "@/src/pages/Comission/ComissionDashBoard.tsx";

export const Comission = () => {
    return (
        <Routes>
            <Route path="/" element={<ComissionRoutes />}>
                <Route path='' element={<ComissionDashBoard/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}