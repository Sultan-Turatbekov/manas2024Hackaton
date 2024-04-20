import { useState} from "react";
import {ExamTable} from "@/src/components/shared/ExamTable/ExamTable.tsx";
import {GradeTable} from "@/src/components/shared/GradeTable/GradeTable.tsx"
export const StudentDashboard = () => {

    const [isDivOpen, setIsDivOpen] = useState(true);
    const [isExamOpen,setIsExamOpen]=useState(false)
    const [isGradeOpen,setIsGradeOpen]=useState(false)


    const toggleDiv = () => {
        setIsDivOpen(true);
        setIsExamOpen(false);
        setIsGradeOpen(false)
    };
    const toggleExam = () => {
        setIsDivOpen(false);
        setIsExamOpen(true);
        setIsGradeOpen(false)
    };
    const toggleGrade = () => {
        setIsDivOpen(false);
        setIsExamOpen(false);
        setIsGradeOpen(true)
    };

    return (
        <div>
            <header className="flex items-center justify-between">
                <img className="w-[50px] h-[50px]" src="./assets/logo2.png"/>
                <ul className="flex gap-10">
                    <li className="font-bold cursor-pointer" onClick={toggleDiv}>ЛИЧНЫЕ ДАННЫЕ</li>
                    <li className="font-bold cursor-pointer" onClick={toggleExam}>МОИ ЭКЗАМЕНЫ</li>
                    <li className="font-bold cursor-pointer" onClick={toggleGrade}>МОИ ОЦЕНКИ</li>
                </ul>
            </header>

            {/* Див, который будет отображаться или скрываться */}
            {isDivOpen && (
                <div className=" items-center mt-[100px]">
                    <h2 className="text-[40px] font-bold text-[#174496]">Контактная информация</h2>
                    <div className="flex flex-wrap justify-between gap-3  ">


                        <div  className="flex flex-col w-[calc(33.33%-10px)]">
                            <p className="text-[14px] text-[#959595] ">Фамилия</p>
                            <input placeholder="Фамилия"
                                   className="w-full py-[12px] px-[25px] border-[1px] border-[#174496] rounded-[8px]"/>
                        </div>
                        <div className="flex flex-col w-[calc(33.33%-10px)]">
                            <p className="text-[14px] text-[#959595] ">Имя</p>
                            <input placeholder="Имя"
                                   className="w-full py-[12px] px-[25px] border-[1px] border-[#174496] rounded-[8px]"/>
                        </div>
                        <div className="flex flex-col w-[calc(33.33%-10px)]">
                            <p className="text-[14px] text-[#959595] ">Отчество</p>
                            <input placeholder="Отчество"
                                   className="w-full py-[12px] px-[25px] border-[1px] border-[#174496] rounded-[8px]"/>
                        </div>
                        <div className="flex flex-col w-[calc(33.33%-10px)]">
                            <p className="text-[14px] text-[#959595] ">Контактный e-mail</p>
                            <input placeholder="Контактный e-mail"
                                   className="w-full py-[12px] px-[25px] border-[1px] border-[#174496] rounded-[8px]"/>
                        </div>
                        <div className="flex flex-col w-[calc(33.33%-10px)]">
                            <p className="text-[14px] text-[#959595] ">Контактный телефон</p>
                            <input placeholder="Контактный телефон"
                                   className="w-full py-[12px] px-[25px] border-[1px] border-[#174496] rounded-[8px]"/>
                        </div>
                        <div className="flex flex-col w-[calc(33.33%-10px)]">
                            <p className="text-[14px] text-[#959595] ">Год окончания учебного заведения</p>
                            <input placeholder="Год окончания учебного заведения"
                                   className="w-full py-[12px] px-[25px] border-[1px] border-[#174496] rounded-[8px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-[calc(33.33%-10px)] mt-[100px]">
                        <h1 className="text-[28px] text-[#174496] font-bold">Имя пользователя</h1>
                        <p className="text-[14px] text-[#959595] ">Имя пользователя</p>
                        <input placeholder="Имя пользователя"
                               className="w-full py-[12px] px-[25px] border-[1px] border-[#174496] rounded-[8px]"/>
                    </div>
                </div>
            )}
            {isExamOpen && (
                <div className="flex items-center justify-center mt-8">
                    <ExamTable/>
                </div>
            )}
            {isGradeOpen && (
                <div className="flex items-center justify-center bg-gray-200 h-20">
                    <GradeTable/>
                </div>
            )}
        </div>
    );
};
