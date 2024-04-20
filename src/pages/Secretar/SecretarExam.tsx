import {useEffect, useState} from "react";
import ApiFetch from "@/src/services/authorization.ts";
import {convertDate} from "@/src/services/timeConverter.ts";
import {Button} from "@/src/components/ui/button.tsx";
import {Link, useNavigate} from "react-router-dom";
import {SquareArrowRight} from "lucide-react";

export const SecretarExam = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await ApiFetch.getGlobalExams(localStorage.getItem('token'))
            console.log(res)
            if(res.status === 200){
                setData(res.data)
                console.log(data)
            }
        }
        fetchData()
    }, []);
    return (
        <div>

            <div className={`py-5`}>
                <p>Все экзамены'</p>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px', width: '300px' }}>Вид</th>
                        <th style={{ border: '1px solid black', padding: '8px', width: '300px' }}>Начало</th>
                        <th style={{ border: '1px solid black', padding: '8px', width: '300px' }}>Конец</th>
                        <th style={{ border: '1px solid black', padding: '8px', width: '300px' }}>Кабинет</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }} className={`flex justify-between`}>
                                <Link to={`${item.id}`}>{item.name}</Link> {/* Изменение здесь */}
                                <div onClick={()=>navigate('')}><SquareArrowRight /></div>
                            </td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{convertDate(item.startTime)}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{convertDate(item.endTime)}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{item.classRoom}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}