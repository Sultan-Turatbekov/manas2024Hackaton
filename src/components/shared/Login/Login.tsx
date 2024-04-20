import {Link} from "react-router-dom";
import {Input} from "@/src/components/ui/input.tsx";
import {Button} from "@/src/components/ui/button.tsx";
import {useState} from "react";
import ApiFetch from "@/src/services/authorization.ts";

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {email, password}
        const response = await ApiFetch.logIn(data)
        console.log(response)
    }

    return (
        <div className={`relative top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[50%] flex flex-col justify-center items-center gap-10`}>
            <Link to={'/'}>
                <Button>Go back</Button>
            </Link>
            <form className={`flex flex-col gap-2 max-w-[400px] w-full mx-auto p-3 shadow rounded bg-slate-300`}
                  onSubmit={handleSubmit}>
                <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <Button type="submit">Send</Button>
            </form>
        </div>
    )
}