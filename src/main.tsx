import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "@/src/App.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LogIn} from "@/src/pages/LogIn/LogIn.tsx";
import {AdminLogin} from "@/src/pages/Admin/AdminLogin.tsx";
import {Home} from "@/src/pages/Home/Home.tsx";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {StudentRegistration} from "@/src/components/shared/StudentRegistration/StudentRegistration.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="login" element={<LogIn />} />
                  <Route path="studentRegistration" element={<StudentRegistration />} />
                  <Route path="admin" element={<AdminLogin />} />
                  <Route path="*" element={<NotFoundPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
