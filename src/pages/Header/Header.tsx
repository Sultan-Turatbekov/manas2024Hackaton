import logo from '../../../public/assets/logo2.png'
import {Instagram, LogOut, User} from 'lucide-react';
import { Facebook } from 'lucide-react';
import { LogIn } from 'lucide-react';
import {Link, useNavigate} from 'react-router-dom';
import {DropdownMenu, DropdownMenuItem} from "@/src/components/ui/dropdown-menu.tsx";
import {DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from '@/src/components/ui/dropdown-menu';

export const Header = () => {
    const navigate = useNavigate()
    const handleProfile = () => {
        localStorage.getItem('role') === 'SECRETAR' ? navigate('secretar') : '*'
    }
    return (
        <>
            <div className='relative w-full h-[500px]'>
                <div className='absolute top-0 left-0 w-full h-full z-[-2] size-full'>
                    <img className={`size-full object-cover z-[-2]`} src="@/public/assets/banner.jpg" alt="dfsdfsd"/>
                    <div className={`absolute top-0 size-full bg-black opacity-[0.6] z-[2]`}></div>
                </div>
                <div className='w-full mx-auto relative p-6 font-bold '>
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col items-center gap-2">
                            <h3 className="text-[20px] text-white">Мы в социальных сетях</h3>
                            <div className="flex gap-1"><a><Instagram style={{color:"white"}} /></a> <a> <Facebook style={{color:"white"}} /></a></div>
                        </div>
                        <div className='flex items-center gap-2 w-[150px]'>
                            <img className='w-[198px] h-[98px]' src={logo} alt="logoManas"/>
                            <p className='text-white text-[20px] font-bold cursor-pointer'>УНИВЕРСИТЕТ МАНАС </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-[20px] text-white"> call-центр для приёма звонков</h3>
                            <p className="text-white">+996 (312) 54 19 41-47</p>
                        </div>
                    </div>
                    <div className=' mt-[40px]  '>

                        <ul className='flex gap-2 justify-around'>
                            <li className='text-white text-[14px] hover:text-black-500  cursor-pointer font-bold'>ПРОГРАММА</li>
                            <li className='text-white text-[14px]  cursor-pointer'>ОБ УНИВЕРСИТЕТЕ</li>
                            <li className='text-white text-[14px]  cursor-pointer'>АБИТУРИЕНТУ</li>
                            <li className='text-white text-[14px]  cursor-pointer'>АБИТУРИЕНТУ</li>
                            <li className='text-white text-[14px]  cursor-pointer'>КАК ПОСТУПИТЬ</li>
                            <li className='text-white text-[14px]  cursor-pointer'>СТУДЕНЧЕСКАЯ ЖИЗНЬ</li>
                            <li className='text-white text-[14px]  cursor-pointer'>
                                <Link to={`student/registration`}>ПОДАТЬ ДОКУМЕНТЫ</Link>
                            </li>
                            <li className="flex  text-white text-[14px]  cursor-pointer gap-1">
                                {localStorage.getItem('token') ?
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <User/>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-40">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem className={'cursor-pointer p-2'} onClick={handleProfile}>
                                                    <User className="mr-2 h-4 w-4" />
                                                    <span>Profile</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuItem className={'cursor-pointer p-2'} onClick={()=>{localStorage.removeItem('token'); localStorage.removeItem('role'); window.location.reload()}}>
                                                <LogOut className="mr-2 h-4 w-4" />
                                                <span>Log out</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                :
                                    <Link className={`flex gap-1 items-center`} to={'login'}>
                                        <LogIn
                                            style={{color: "white"}} className={'block'}/>
                                        <span className={'block'}>LOG IN</span>
                                    </Link>
                                }


                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        </>
    )
}