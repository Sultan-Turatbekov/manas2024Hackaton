import {useEffect, useState} from "react";
import ApiFetch from "@/src/services/authorization.ts";

export const ComissionDashBoard = () => {
    const token = localStorage.getItem('token')
    useEffect(() => {

        const fetchData = async () => {
            const res = await ApiFetch.getGlobalExams(token)
            console.log(res)
        }
        fetchData()
    }, []);

    return (
        <div>
            Commisisisisisis
        </div>
    );
};
