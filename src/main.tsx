import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "@/src/App.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LogIn} from "@/src/components/shared/Login/Login.tsx";
import {Home} from "@/src/pages/Home/Home.tsx";
import {NotFoundPage} from "@/src/pages/NotFoundPage/NotFoundPage.tsx";
import {Admin} from "@/src/routes/Admin.tsx";
import {Student} from "@/src/routes/Student.tsx";
import {Secretar} from "@/src/routes/Secretar.tsx";
import {BolumBaskan} from "@/src/routes/BolumBaskan.tsx";
import {Comission} from "@/src/routes/Comission.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index path='/' element={<Home />} />
                  <Route path="login" element={<LogIn />} />
                  <Route path="admin/*" element={<Admin />} />
                  <Route path="student/*" element={<Student />} />
                  <Route path="secretar/*" element={<Secretar />} />
                  <Route path="bolumbaskan/*" element={<BolumBaskan />} />
                  <Route path="comission/*" element={<Comission />} />
                  <Route path="*" element={<NotFoundPage />} />

              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
