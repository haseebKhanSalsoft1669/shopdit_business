import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import { Pagination } from 'antd';
import { ImageUrl } from '../../utils/Functions';

// import Badge from "../../components/ui/badge/Badge";
import { Eye } from "lucide-react";

import {
    ModuleRegistry
} from "ag-grid-community";
import { AllEnterpriseModule } from "ag-grid-enterprise";
import { useNavigate } from "react-router";


interface User {
    id: number;
    applicationName: {
        image: string;
        name: string;
    };
    fileName: string;
}

// Define the table data using the interface
const tableData: User[] = [
    {
        id: 1,
        applicationName: {
            image: "userpic.png",
            name: "James Anderson",
        },
        fileName: "Content Writer - Resume.pdf",
    },
];

ModuleRegistry.registerModules([AllEnterpriseModule]);

const UserManagement = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className=" flex items-center justify-between">
                <h1 className="text-2xl font-bold py-2">JOB DETAIL APPLICATIONS</h1>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div className="max-w-full overflow-x-auto py-4">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    S.No
                                </TableCell>

                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    APPLICATION NAME
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    FILE NAME
                                </TableCell>

                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {tableData.map((user, index) => (
                                <TableRow key={user.id}>
                                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                                        #{index + 1}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                                <img
                                                    width={40}
                                                    height={40}
                                                    src={ImageUrl(user.applicationName.image)}
                                                    alt={user.applicationName.name}
                                                />
                                            </div>
                                            <div>
                                                <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                    {user.applicationName.name}
                                                </span>
                                            </div>
                                        </div>
                                        {/* {user.applicationName} */}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {user.fileName}
                                    </TableCell>

                                    {/* New Action Column */}
                                    <TableCell className="px-4 py-3 text-center">
                                        <button
                                            onClick={() => navigate(`/career-management/${user.id}`)}
                                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
                                            title="View Details"
                                        >
                                            <Eye size={18} className="text-gray-600 dark:text-gray-300" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="p-4">
                    <Pagination align="end" defaultCurrent={1} total={50} />
                </div>
            </div>
        </>
    );
};



export default UserManagement;
