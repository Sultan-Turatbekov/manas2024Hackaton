import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "../../ui/select"
import { Button } from "@/src/components/ui/button.tsx";
import {useEffect, useState} from "react";
import ApiFetch from "@/src/services/authorization.ts";
import { Calendar } from "../../ui/calendar";
import {Checkbox} from "@/src/components/ui/checkbox.tsx";
import React from "react";
import {number} from "zod";
export const StudentRegistration = () => {
    const [departments, setDepartments] = useState([])
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [frontPicture, setFrontPicture] = useState<File | null>(null);
    const [backPicture, setBackPicture] = useState<File | null>(null);
    const [select, setSelect] = useState<number>(1);
    const [documentPhoto, setDocumentPhoto] = useState<File | null>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('')
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('FirstName', name);
        formData.append('LastName', surname);
        formData.append('Email', email);
        formData.append('DepartmentId', select);
        formData.append('PhoneNumber', phoneNumber);
        formData.append('DoB', date);
        if (frontPicture) {
            formData.append('PassportFront', frontPicture);
        }
        if (backPicture) {
            formData.append('PassportBack', backPicture);
        }
        if (documentPhoto) {
            formData.append('DiplomImage', documentPhoto);
        }
        const registationStudent = async () => {
            const res = await ApiFetch.registerStudent(formData)
        }
        registationStudent()
    };
    const handleChangeFrontPicture = (e:any) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setFrontPicture(file);
        }
    };
    const handleChangeBackPicture = (e:any) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setBackPicture(file);
        }
    };
    const handleChangeDocumentPhoto = (e:any) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setDocumentPhoto(file);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const departments = await ApiFetch.getDepartments()
            console.log(departments)
            setDepartments(departments)
        }
        fetchData();
    }, []);

    return (
        <div className={`mx-auto relative top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[50%]`}>
            <form className={`flex flex-col gap-2 max-w-[500px] w-full mx-auto p-3 shadow rounded bg-slate-300`} onSubmit={handleSubmit}>
                <Input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <Input type="text" placeholder="Surname" value={surname} onChange={(e)=>setSurname(e.target.value)} />
                <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <div className={'flex gap-10 my-2'}>
                    <div className={`flex flex-col w-1/2 mt-auto gap-2`}>
                        <Label>Дата рождения</Label>
                        <input onChange={(e)=>setDate(new Date(e.target.value))} className={`rounded h-[38px] p-4`} type="date"/>
                    </div>

                    <div className={'flex flex-col w-1/2 mt-auto gap-2'}>
                        <Label>Выберите</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Выберите отдел"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value={`магистратура`}>Магистратура</SelectItem>
                                    <SelectItem value={`доктарантура`}>Доктарантура</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
                <div className={`flex gap-10`}>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="frontPicture">Фронтальная часть паспорта</Label>
                        <Input id="frontPicture" type="file" onChange={handleChangeFrontPicture}/>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="backPicture">Задняя часть паспорта</Label>
                        <Input id="backPicture" type="file" onChange={handleChangeBackPicture}/>
                    </div>
                </div>
                <div className={`flex gap-10`}>
                    <div className={'mt-auto w-1/2'}>
                        <Label htmlFor="documentPhoto">Выберите отдел</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Выберите отдел" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {departments && departments.map(item => <SelectItem key={item.id} onClick={()=>setSelect(item.id)} value={`${item.name}`}>{item.name}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-1/2 max-w-sm items-center gap-1.5">
                        <Label htmlFor="documentPhoto">Фото диплома</Label>
                        <Input id="documentPhoto" type="file" onChange={handleChangeDocumentPhoto} />
                    </div>
                </div>

                <Input type="phone" placeholder="Phone number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                <Button type="submit">Send</Button>
            </form>
        </div>
    )
}
