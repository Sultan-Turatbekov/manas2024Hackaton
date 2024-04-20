import {Link, NavLink, Outlet} from "react-router-dom";

export const SecretarRoutes = () => {

    return (
        <div className={`py-10`}>
            <Link className={`p-2 bg-slate-500 rounded-xl`} to={'/'}>Go to Home page</Link>
            <div>
                <p className={`text-3xl text-center`}>Это старница управления секретаря</p>
            </div>
            <div className={'flex'}>
                <div className={`flex flex-col mt-32 w-1/5 items-end pr-20`}>
                    <NavLink className={`p-2 text-lg ${isActive => isActive ? 'bg-slate-500' : ''}`}
                             to="requests">Заявки</NavLink>
                    <NavLink className={`p-2 text-lg ${isActive => isActive ? 'bg-slate-500' : ''}`}
                             to="exams">Экзамены</NavLink>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
