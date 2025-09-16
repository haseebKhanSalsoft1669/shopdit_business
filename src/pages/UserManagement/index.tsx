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
  projectName: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  registrationDate: string;
  // status: string;
}

// Define the table data using the interface
const tableData: User[] = [
  {
    id: 1,
    projectName: "Agency Website",
    firstName: "abc",
    lastName: "def",
    emailAddress: "abc@example.com",
    registrationDate: "2023-10-01",
    // status: "Active",
  },
  {
    id: 2,
    projectName: "Agency Website",
    firstName: "abc",
    lastName: "def",
    emailAddress: "abc@example.com",
    registrationDate: "2023-10-01",
    // status: "Inctive",
  },
  // {
  //   id: 2,
  //   user: {
  //     image: "/images/user/user-18.jpg",
  //     name: "Kaiya George",
  //     role: "Project Manager",
  //   },
  //   projectName: "Technology",
  //   team: {
  //     images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
  //   },
  //   budget: "24.9K",
  //   status: "Pending",
  // },
  // {
  //   id: 3,
  //   user: {
  //     image: "/images/user/user-17.jpg",
  //     name: "Zain Geidt",
  //     role: "Content Writing",
  //   },
  //   projectName: "Blog Writing",
  //   team: {
  //     images: ["/images/user/user-27.jpg"],
  //   },
  //   budget: "12.7K",
  //   status: "Active",
  // },
  // {
  //   id: 4,
  //   user: {
  //     image: "/images/user/user-20.jpg",
  //     name: "Abram Schleifer",
  //     role: "Digital Marketer",
  //   },
  //   projectName: "Social Media",
  //   team: {
  //     images: [
  //       "/images/user/user-28.jpg",
  //       "/images/user/user-29.jpg",
  //       "/images/user/user-30.jpg",
  //     ],
  //   },
  //   budget: "2.8K",
  //   status: "Cancel",
  // },
  // {
  //   id: 5,
  //   user: {
  //     image: "/images/user/user-21.jpg",
  //     name: "Carla George",
  //     role: "Front-end Developer",
  //   },
  //   projectName: "Website",
  //   team: {
  //     images: [
  //       "/images/user/user-31.jpg",
  //       "/images/user/user-32.jpg",
  //       "/images/user/user-33.jpg",
  //     ],
  //   },
  //   budget: "4.5K",
  //   status: "Active",
  // },
];

ModuleRegistry.registerModules([AllEnterpriseModule]);

const UserManagement = () => {
  const navigate = useNavigate();

  // const handleView = (id: number) => {
  //     navigate(`/user-management/${id}`);
  // };


  return (
    <>
      <h1 className="text-2xl font-bold py-2">USER MANAGEMENT</h1>
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
                {/* <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                User
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Project Name
              </TableCell>
              
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Team
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Budget
              </TableCell> */}
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  First Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Last Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  REGISTRATION DATE
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  EMAIL ADDRESS
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
                  {/* <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={order.user.image}
                        alt={order.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {order.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.projectName}
                </TableCell> */}
                  {/* <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <div className="flex -space-x-2">
                    {order.team.images.map((teamImage, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                      >
                        <img
                          width={24}
                          height={24}
                          src={teamImage}
                          alt={`Team member ${index + 1}`}
                          className="w-full size-6"
                        />
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Active"
                        ? "success"
                        : order.status === "Pending"
                          ? "warning"
                          : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {order.budget}
                </TableCell> */}

                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.firstName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.lastName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.registrationDate}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {user.emailAddress}
                  </TableCell>

                  {/* New Action Column */}
                  <TableCell className="px-4 py-3 text-center">
                    <button
                      onClick={() => navigate(`/user-management/${user.id}`)}
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
