import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "../../ui/select"
import { Button } from "@/src/components/ui/button.tsx";
import { useState } from "react";
export const StudentRegistration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [frontPicture, setFrontPicture] = useState<File | null>(null);
    const [backPicture, setBackPicture] = useState<File | null>(null);
    const [select, setSelect] = useState('HAGHA');
    const [documentPhoto, setDocumentPhoto] = useState<File | null>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('surname', surname);
        formData.append('email', email);
        formData.append('select', select);
        formData.append('phoneNumber', phoneNumber);
        if (frontPicture) {
            formData.append('frontPicture', frontPicture);
        }
        if (backPicture) {
            formData.append('backPicture', backPicture);
        }
        if (documentPhoto) {
            formData.append('documentPhoto', documentPhoto);
        }
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

    return (
        <div className={`mx-auto`}>
            <form className={`flex flex-col gap-2 w-[400px] mx-auto`} onSubmit={handleSubmit}>
                <Input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <Input type="text" placeholder="Surname" value={surname} onChange={(e)=>setSurname(e.target.value)} />
                <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <div className={`flex gap-10`}>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="frontPicture">Фронтальная часть</Label>
                        <Input id="frontPicture" type="file" onChange={handleChangeFrontPicture} />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="backPicture">Задняя часть</Label>
                        <Input id="backPicture" type="file" onChange={handleChangeBackPicture} />
                    </div>
                </div>
                <div className={`flex gap-10`}>
                    <div className={'mt-auto'}>
                        <Select value={select}>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Выберите" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem  onClick={()=>setSelect('Магистратура')} value="Магистратура">Магистратура</SelectItem>
                                    <SelectItem  onClick={()=>setSelect('Доктарантура')} value="Доктарантура">Доктарантура</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="documentPhoto">Фотография документа</Label>
                        <Input id="documentPhoto" type="file" onChange={handleChangeDocumentPhoto} />
                    </div>
                </div>

                <Input type="phone" placeholder="Phone number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                <Button type="submit">Send</Button>
            </form>
        </div>
    )
}