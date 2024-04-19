import {client} from "./api.ts";
import axios from 'axios';


const AUTH_URL = '/client/api/'

class Authorization {
    async checkEmail(email:any) {
        const params = { email: email };
        try {
            const response = await client.get(AUTH_URL + 'account/checkEmail', { params });
            return response.status;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.status);
                return error.response?.status;
            } else {
                throw error;
            }
        }
    }

}

const AuthorizationService = new Authorization()

export default AuthorizationService;