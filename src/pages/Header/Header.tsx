import logo from '../../../public/assets/logo2.png'
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <div className='relative w-full h-[500px]'>
                <div className='absolute top-0 left-0 w-full h-full z-[-2] size-full'>
                    <img className={`size-full object-cover z-[-2]`} src="./assets/banner.jpg" alt="dfsdfsd"/>
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
                            <li className="flex text-white text-[14px]  cursor-pointer gap-1"><LogIn
                                style={{color: "white"}}/>LOG IN
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        </>
    )
}