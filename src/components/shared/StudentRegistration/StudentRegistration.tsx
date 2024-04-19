import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "../../ui/select"
import { Button } from "@/src/components/ui/button.tsx";
import { useState } from "react";

export const StudentRegistration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [frontPicture, setFrontPicture] = useState();
    const [backPicture, setBackPicture] = useState();
    const [select, setSelect] = useState('HAGHA');
    const [documentPhoto, setDocumentPhoto] = useState();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name, surname, email, frontPicture, backPicture, select, documentPhoto, phoneNumber
        }
        console.log(data)

    }
    const imgToBase64 = (e, type) => {
        const data = new FileReader()
        data.addEventListener('load', ()=>{
            type ==='front' ? setFrontPicture(data.result) : type ==='back' ? setBackPicture(data.result) : setDocumentPhoto(data.result)
        })
        data.readAsDataURL(e.target.files[0])
    }
    return (
        <div className={`mx-auto`}>
            <form className={`flex flex-col gap-2 w-[400px] mx-auto`} onSubmit={handleSubmit}>
                <Input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <Input type="text" placeholder="Surname" value={surname} onChange={(e)=>setSurname(e.target.value)} />
                <Input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <div className={`flex gap-10`}>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="frontPicture">Фронтальная часть</Label>
                        <Input id="frontPicture" type="file" onChange={(e)=>imgToBase64(e,'front')} />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="backPicture">Задняя часть</Label>
                        <Input id="backPicture" type="file" onChange={(e)=>imgToBase64(e,'back')} />
                    </div>
                </div>
                <div className={`flex gap-10`}>
                    <div className={'mt-auto'}>
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Выберите" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem onClick={()=>setSelect('Магистратура')} value="Магистратура">Магистратура</SelectItem>
                                    <SelectItem onClick={()=>setSelect('Доктарантура')} value="Доктарантура">Доктарантура</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="documentPhoto">Фотография документа</Label>
                        <Input id="documentPhoto" type="file" onChange={(e)=>imgToBase64(e,'documentPhoto')} />
                    </div>
                </div>

                <Input type="phone" placeholder="Phone number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                <Button type="submit">Send</Button>
            </form>
        </div>
    )
}
