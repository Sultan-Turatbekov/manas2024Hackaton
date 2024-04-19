import {client} from "./api.ts";
import axios from 'axios';



class Authorization {
    async registerStudent(data) {
        try {
            const response = await client.post('');
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

    async getDepartments() {
        try {
            const response = await client.get('Test/GetAllDepartmenst/');
            console.log(response)
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

const ApiFetch = new Authorization()

export default ApiFetch;