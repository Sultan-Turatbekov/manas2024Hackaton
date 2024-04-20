import ApiFetch from "@/src/services/authorization.ts";
import {useEffect} from "react";
import {useState} from "react";

export const GradeTable = () => {
    const [gradeData, setGradeData] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Состояние открытия выпадающего списка

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiFetch.getGrade();
                setGradeData(response); // Сохраняем данные в стейт examData
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <table className="w-full border border-gray-300 border-collapse mt-[100px]">
            <thead className="bg-gray-200">
            <tr>
                <th className="px-4 py-2 border border-gray-300">Жюри</th>
                <th className="px-4 py-2 border border-gray-300">Экзмен</th>
                <th className="px-4 py-2 border border-gray-300">AVG</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {gradeData.map((item:any,index:number) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                    <td className="px-4 py-2 border border-gray-300 font-medium text-center">{item.applicationUserStud.firstName}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{item.applicationUserStud.lastName}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center">{item.studGrade}</td>
                    <td className="px-4 py-2 border border-gray-300 text-center"><button onClick={toggleDropdown} className="p-[10px] bg-[#174496] rounded-[10px]  text-white">View All</button>
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
