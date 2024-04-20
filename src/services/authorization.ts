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

    async createExam(data, token) {
        try {
            const response = await client.post('Exam/CreateExam', data, {headers:{'Authorization':`Bearer ${token}`}});
            console.log(response)
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

    async getExamsById(token, id) {

        try {
            const response = await fetch.get(`Exam/GetSingleExamById?id=${id}`,{headers:{'Authorization' : `Bearer ${token}`}});
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

    async getGlobalExams(token) {
        try {
            const response = await fetch.get('Secretar/GetAllGlobalExamsBydepartment', {headers:{'Authorization' : `Bearer ${token}`}});
            return response
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.status);
                return error.response?.status;
            } else {
                throw error;
            }
        }
    }
    async getExamsById(token, id) {
        try {
            const response = await fetch.get(`Secretar/GetAllStudentsByGlobalExamId?id=${id}`, {headers: {'Authorization':`Bearer ${token}`}});
            return response
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