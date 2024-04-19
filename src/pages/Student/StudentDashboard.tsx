import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

export const StudentDashboard = () => {
    const navigate = useNavigate();
    const token = false;

    useEffect(() => {
        if (!token) {
            navigate('login');
        }
    }, [navigate, token]);

    return (
        <div>
            Student Dashboard
        </div>
    );
};
