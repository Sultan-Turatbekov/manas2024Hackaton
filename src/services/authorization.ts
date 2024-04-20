import {client, fetch} from "./api.ts";
import axios from 'axios';



class Authorization {
    async registerStudent(data) {
        try {
            const response = await client.post('Auth/register', data);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.status);
                return error.response?.status;
            } else {
                throw error;
            }
        }
    }

    async getDepartments() {
        try {
            const response = await fetch.get('Test/GetAllDepartmenst/');
            console.log(response)
            return response.data
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

const ApiFetch = new Authorization()

export default ApiFetch;