import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ApiFetch from "@/src/services/authorization.ts";

export const SecretarExamDetails = () => {
    const params = useParams()
    const id = String(params.id)
    const token = localStorage.getItem('token')
    const [data, setData] = useState([])
    const [examPhoto, setExamPhoto] = useState<File | null>(null);

    const handleChangeFrontPicture = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setExamPhoto(file);
        }

    };
    const handleSend = async id => {
        console.log(id)
        const token = localStorage.getItem('token')
        const GlobalExamID = params.id
        const formData = new FormData();
        formData.append('GlobalExamID', GlobalExamID);
        formData.append('ApplicationUserStudId', id);
        formData.append('ExamImages', examPhoto);
        const res = await ApiFetch.createExam(formData, token)
        if(res.status === 200){
            setExamPhoto(null); // Сброс значения examPhoto
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await ApiFetch.getExamsById(token, id)
            console.log(res)
            if(res.status === 200){
                setData(res.data)
            }
        }
        fetchData()
    }, []);
    return (
        <div>
            <div className={`py-5`}>
                <p className={`text-center text-2xl my-4`}>Все участники экзамена</p>
                <table style={{borderCollapse: 'collapse', width: '100%'}}>
                    <thead>
                    <tr>
                        <th style={{border: '1px solid black', padding: '8px', width: '250px'}}>Фамилия</th>
                        <th style={{border: '1px solid black', padding: '8px', width: '250px'}}>Имя</th>
                        <th style={{border: '1px solid black', padding: '8px', width: '250px'}}>Эл.почта</th>
                        <th style={{border: '1px solid black', padding: '8px', width: '250px'}}>Добавить</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((item, index) => (
                        <tr key={index}>
                            <td style={{border: '1px solid black', padding: '8px'}}>{item.lastName}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>{item.firstName}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>{item.normalizedEmail}</td>
                            <td style={{border: '1px solid black', padding: '8px'}}>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <input  type={`file`} onChange={handleChangeFrontPicture}/>
                                    <button onClick={()=>handleSend(item.id)}>Send</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}