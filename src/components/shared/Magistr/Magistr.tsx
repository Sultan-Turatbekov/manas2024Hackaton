import DB from './Magistr.json'
import {IMagistr} from '@/src/lib/types/IMagistr.ts'
export const Magistr = () => {

    return (
        <>
            <h2 className="text-[40px] font-bold text-[#174496] mt-[100px] ">Как поступить в магистратуру МАНАС?</h2>
            <div  className=" flex gap-5 justify-between  mt-[90px]  ">
                {
                    DB.map((item:IMagistr,index:number)=>(

                            <div key={index} className="flex flex-col ">
                                <div className="flex items-center">
                        <span
                            className="mr-[10px] w-[40px] h-[40px] text-white flex justify-center items-center   bg-[#174496] rounded-[50px] shrink-0 ">{item.number}</span>
                                    <p className="text-[16px] text-[#174496] font-medium">{item.title}</p>
                                </div>

                                <div className="flex ml-[12px] ">
                                    <div className="h-[100%] min-h-[15px] flex flex-col">
                                        <span className="w-[1px] h-[100%] min-h-[31px] ml-[7px] bg-[#174496]"></span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex   ml-[12px] h-[100%]">
                                        <div className="h-[100%] flex flex-col">
                                <span
                                    className="w-[15px] h-[15px] rounded-[50px] border-[1px] border-[#174496] mr-[24px]   flex shrink-0 z-[2] "></span>
                                            <span className="w-[1px] h-[100%] min-h-[31px]  bg-[#174496] ml-[7px] "></span>
                                        </div>
                                        <a href={item.link}  className="text-[14px] cursor-pointer">{item.firsttitle}</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex  ml-[12px] h-[100%]">
                                        <div className="h-[100%] min-h-[13px] flex flex-col">
                                <span
                                    className="w-[15px] h-[15px] rounded-[50px] border-[1px] border-[#174496] mr-[24px]   flex shrink-0 z-[2] "></span>
                                            <span className="w-[1px] h-[100%] min-h-[31px]  bg-[#174496] ml-[7px] "></span>
                                        </div>
                                        <a className="text-[14px]  mt-[-4px] cursor-pointer  ">{item.secondtitle}</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex ml-[12px] h-[100%]">
                                        <div className="h-[100%] min-h-[13px] flex flex-col">
                                <span
                                    className="w-[15px] h-[15px] rounded-[50px] border-[1px] border-[#174496] mr-[24px]   flex shrink-0 z-[2] "></span>

                                        </div>
                                        <a className="text-[14px]  mt-[-4px] cursor-pointer">{item.thirdtitle}</a>
                                    </div>
                                </div>

                            </div>

                        )

                    )

                }



            </div>
        </>
    )
}