import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

export const SisAdminDashboard = () => {
    const navigate = useNavigate();
    const token = false;

    useEffect(() => {
        if (!token) {
            navigate('login');
        }
    }, [navigate, token]);

    return (
        <div>
            SisAdmin Dashboard
        </div>
    );
};
