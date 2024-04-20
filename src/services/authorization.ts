import {client, fetch} from "./api.ts";
import axios from 'axios';



class Authorization {
    async registerStudent(data) {
        try {
            const response = await client.post('Auth/register', data);
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

    async logIn(data) {
        console.log(data)
        try {
            const response = await fetch.post('Auth/Login', data);
            console.log(response)
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.status);
                return error.response?.status;
            } else {
                throw error;
            }
        }
    }

    async studentRequests(token) {

        try {
            const response = await fetch.get('Secretar/GetAllStatementsBydepartment',{headers:{'Authorization' : `Bearer ${token}`}});
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.status);
                return error.response?.status;
            } else {
                throw error;
            }
        }
    }

    async accept(token, id) {
        try {
            const response = await fetch.post('Secretar/AccesptStatement',{statementId: id},{headers:{'Authorization' : `Bearer ${token}`}});
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

    async notAccept(token, id) {

        try {
            const response = await fetch.post('Secretar/NotAccesptStatement',{statementId: id}, {headers:{'Authorization' : `Bearer ${token}`}});
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

    async getExams() {
        try {
            const response = await client.get('GlobalExam/GetAllGlobalExam');
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

    async getGrade() {
        try {
            const response = await client.get('Grade/GetAllGradeById?id=b272d982-dce6-40fb-b8ee-5b132a4ce0a9');
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

    async getUser() {
        try {
            const response = await fetch.get('User/GetCurrentUser/', {
                headers: {
                    'Authorizataion': `Bearer ${localStorage.getItem('token')}`
                }
            });
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