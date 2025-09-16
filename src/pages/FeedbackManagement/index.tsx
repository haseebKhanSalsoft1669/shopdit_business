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
  name: string;
  email: string;
  receivedOn: string;
  // status: string;
}

// Define the table data using the interface
const tableData: User[] = [
  {
    id: 1,
    name: "ABC Business",
    email: "James Anderson",
    receivedOn: "abc@example.com",
  },
  {
    id: 2,
    name: "ABC Business",
    email: "James Anderson",
    receivedOn: "abc@example.com",
  },
];

ModuleRegistry.registerModules([AllEnterpriseModule]);

const UserManagement = () => {
  const navigate = useNavigate();

  // const handleView = (id: number) => {
  //     navigate(`/user-management/${id}`);
  // };


  return (
    <>
      <h1 className="text-2xl font-bold py-2">FEEDBACK MANAGEMENT</h1>
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
                 NAME
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  EMAIL ADDRESS
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                 RECEIVED ON
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
                    {user.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.email}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.receivedOn}
                  </TableCell>
                  

                  {/* New Action Column */}
                  <TableCell className="px-4 py-3 text-center">
                    <button
                      onClick={() => navigate(`/feedback-management/${user.id}`)}
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
