import logo from '../../../public/assets/logo.png'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div className='relative w-full'>
                <div className='fixed top-0 left-0 w-full h-full z-[-1]'></div>
                <div className='w-[1260px] mx-auto relative'>
                    <div className='flex items-center gap-40 justify-between'>
                        <div className='flex items-center gap-2 w-[100px]'>
                            <img className='w-[48px] h-[48px]' src={logo} alt="logoManas" />
                            <p className='text-white text-[12px]  cursor-pointer font-medium'>MANAS UNIVERSITY</p>
                        </div>
                        <ul className='flex gap-6'>
                            <li className='text-white text-[18px] font-medium cursor-pointer'>Программа</li>
                            <li className='text-white text-[18px] font-medium cursor-pointer'>Кантип тапшыруу керек</li>
                            <li className='text-white text-[18px] font-medium cursor-pointer'>Программа</li>
                            <li className='text-white text-[18px] font-medium cursor-pointer'>Кантип тапшыруу керек</li>

                        </ul>
                        <div><Link to={'studentRegistration'}>Подать документы</Link></div>
                    </div>
                    <div className='mt-[200px] w-[1080px]'>
                        <h1 className='text-white text-[100px] font-bold'>Магистратура МАНАС</h1>
                    </div>
                </div>

            </div>
        </>
    )
}
