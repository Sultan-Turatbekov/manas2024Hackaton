import ApiFetch from "@/src/services/authorization.ts";

import {useEffect} from "react";
import {useState} from "react";

export const ExamTable = () => {
    const [examData, setExamData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiFetch.getExams();
                setExamData(response); // Сохраняем данные в стейт examData
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <table className="w-full border border-gray-300 border-collapse">
            <thead className="bg-gray-200">
            <tr>
                <th className="px-4 py-2 border border-gray-300">Вид</th>
                <th className="px-4 py-2 border border-gray-300">Start date</th>
                <th className="px-4 py-2 border border-gray-300">End date</th>
                <th className="px-4 py-2 border border-gray-300">Classroom</th>
                <th className="px-4 py-2 border border-gray-300">Department</th>
            </tr>
            </thead>
            <tbody>
            {examData.map((item:any,index:number) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                    <td className="px-4 py-2 border border-gray-300 font-medium text-center">{item.name}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{item.startTime}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{item.endTime}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{item.classRoom}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{item.department.name}

                    </td>
                </tr>
            ))}
            </tbody>
            <tfoot>
            {/* Add footer content here if needed */}
            </tfoot>
        </table>
    );
};
