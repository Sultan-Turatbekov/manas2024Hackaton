import { createBrowserRouter } from 'react-router-dom'
import {App} from "../App.tsx";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage.tsx";
import {Home} from "../pages/Home/Home.tsx";
const routesConfig = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFoundPage/>,
        children:[
            {
                path: '/',
                element: <Home/>,
                errorElement: <NotFoundPage/>
            },

        ]
    }
])
export default routesConfig
