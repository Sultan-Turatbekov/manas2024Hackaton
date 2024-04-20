import logo from "@/public/assets/logo2.png";
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { MapPin } from 'lucide-react';
export const Footer = () => {
    return (
        <footer>
            <div className="flex justify-around items-start bg-[#174496] py-[70px]">
                <div className='flex items-center gap-2 w-[150px]'>
                    <img className='w-[198px] h-[98px]' src={logo} alt="logoManas"/>
                    <p className='text-white text-[20px] font-bold cursor-pointer'>УНИВЕРСИТЕТ МАНАС</p>
                </div>
                <div className="text-white">
                    <h2 className="text-[24px]">Для связи</h2>
                    <ul className=" flex flex-col gap-3 text-white mt-[30px] ">
                        <li className="flex gap-3"><Phone/><span>+996 (312) 54 19 35</span></li>
                        <li className="flex gap-3"><MapPin />
                            <span>Кампус им. Ч.Айтматова (Джал), 720038, Бишкек</span></li>
                        <li className="flex gap-3"><Mail/><span>info@manas.edu.kg</span></li>
                    </ul>
                </div>
                <div className="text-white">
                    <h2 className="text-[24px]">Социальные сети</h2>
                    <ul className="  flex gap-3 text-white mt-[30px] ">
                        <li className="flex"><a><Twitter /></a></li>
                        <li className="flex"><a><Instagram/></a></li>
                        <li className="flex"><a><Facebook/></a></li>
                        <li className="flex"><a><Youtube /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}