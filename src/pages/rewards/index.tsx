import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import { Pagination } from 'antd';

// import Badge from "../../components/ui/badge/Badge";
import { Eye } from "lucide-react";

import {
    ModuleRegistry
} from "ag-grid-community";
import { AllEnterpriseModule } from "ag-grid-enterprise";
import { useNavigate } from "react-router";


interface User {
    id: number;
    name:string;
    type: string;
    pointsCost: string;
    value: string;
    validity:string;
    availability:string;
}

// Define the table data using the interface
const tableData: User[] = [
    {
        id: 1,
        name:"10% off",
        type: "Discount",
        pointsCost: "200",
        value: "$5.5",
        validity:"2025-10-01 2025-11-01",
        availability:"500",
    },
    {
        id: 2,
         name:"20% off",
        type: "Product",
        pointsCost: "300",
        value: "$3.5",
        validity:"2025-10-01 2025-11-01",
         availability:"300",
    },
];

ModuleRegistry.registerModules([AllEnterpriseModule]);

const Rewards = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold py-2">Rewards</h1>
                <button type="button" className="web-btn" onClick={() => navigate("/add-reward")}>+ Add Rewards</button>
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
                                   name
                                </TableCell>

                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                   Type
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Points Cost
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Value
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                   Validity
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400">
                                    Availability
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
                                        {user.name}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {user.type}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {user.pointsCost}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                        {user.value}
                                    </TableCell>
                                    {/* New Action Column */}
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                       {user.validity}
                                    </TableCell>
                                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                      {user.availability}
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



export default Rewards;
