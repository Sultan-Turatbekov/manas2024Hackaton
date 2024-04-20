import { NavLink, Outlet} from "react-router-dom";

export const SecretarRoutes = () => {

    return (
        <div className={'flex'}>
            <div className={`flex flex-col mt-32 w-1/5 items-end pr-20`}>
                <NavLink className={`p-2 text-lg ${isActive => isActive ? 'bg-slate-500' : ''}`}  to="requests">Заявки</NavLink>
                <NavLink className={`p-2 text-lg ${isActive => isActive ? 'bg-slate-500' : ''}`} to="exams">Экзамены</NavLink>
                <NavLink className={`p-2 text-lg ${isActive => isActive ? 'bg-slate-500' : ''}`} to="something">еще что-то</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
