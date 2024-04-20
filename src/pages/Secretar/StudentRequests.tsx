import {useEffect, useState} from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion"
import ApiFetch from "@/src/services/authorization.ts";
import {Button} from "@/src/components/ui/button.tsx";
import {X} from "lucide-react";

export const StudentRequests = () => {
    const [data, setData] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setModalOpen(true);
    };

    const handleCLickAccept = async (id) => {
        const token = localStorage.getItem('token')
        const res = await ApiFetch.accept(token, Number(id))
        console.log(res)
        res === 200 ? window.location.reload() : null
    }

    const handleCLickNotAccept = async (id) => {
        const token = localStorage.getItem('token')
        const res = await ApiFetch.notAccept(token, Number(id))
        console.log(res)
        res === 200 ? window.location.reload() : null
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await ApiFetch.studentRequests(localStorage.getItem('token'))
                setData(response)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, []);

    return (
        <div className={`py-5`}>
            <p>Заявки на поступление</p>
            <Accordion type="single" collapsible className={'mt-5'}>
                {data && data.map((item, index: number) => (
                    <AccordionItem key={index} value={`item-${index+1}`}>
                        <AccordionTrigger className={`text-2xl border-2 border-red-500 rounded-2xl p-4 my-2`}>{item.firstName} {item.lastName}</AccordionTrigger>
                        <AccordionContent className={`flex justify-center mt-10 flex-col items-center gap-10`}>
                            <div className={`flex flex-col gap-5 font-[600]`}>
                                <div className={`flex gap-10`}>
                                    <p className={`text-xl ml-4`}>Электронная почта:</p>
                                    <p>{item.email}</p>
                                </div>
                                <div className={`flex gap-10 ml-10 font-[600]`}>
                                    <p className={`text-xl`}>Номер телефона:</p>
                                    <p>{item.phone}</p>
                                </div>
                                <div className={`flex gap-10`}>
                                    <p className={`text-xl ml-2 font-[600]`}>Паспортные данные:</p>
                                    <div className={`flex gap-10`}>
                                        <img className={`w-[100px] h-[100px]`} src={item.passportFrontImage} onClick={() => openModal(item.passportFrontImage)} alt={item.firstName}/>
                                        <img className={`w-[100px] h-[100px]`} src={item.passportBackImage} onClick={() => openModal(item.passportFrontImage)} alt={item.lastName}/>
                                    </div>
                                </div>
                                <div className={`flex gap-10 ml-[125px] font-[600]`}>
                                    <p className={`text-xl`}>Диплом:</p>
                                    <div>
                                        <img className={`w-[100px] h-[100px]`} src={item.diplomImage} onClick={() => openModal(item.passportFrontImage)} alt="diplom"/>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex gap-10 text-center`}>
                                <Button onClick={()=>handleCLickAccept(item.id)} className={`bg-green-600`}>Принять</Button>
                                <Button onClick={()=>handleCLickNotAccept(item.id)} className={`bg-red-600`}>Отказать</Button>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white p-7 rounded-lg relative max-w-[900px]">
                        <img className={`max-w-[400px] h-[400px]`} width={`100%`} src={modalImage} alt="Modal" />
                        <button className="absolute top-2 right-2 text-white bg-black rounded-full" onClick={() => setModalOpen(false)}><X/></button>
                    </div>
                </div>
            )}
        </div>
    );
};
