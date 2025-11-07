import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Pagination } from "antd";
import { useNavigate } from "react-router";
import { Eye } from "lucide-react";
import {
  ModuleRegistry
} from "ag-grid-community";
import { AllEnterpriseModule } from "ag-grid-enterprise";

interface Customer {
  id: number;
  name: string;
  email: string;
  segment: string;
  total: string;
  available: string;
  lifetime: string;
  lastActivity: string;
}

const tableData: Customer[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    segment: "Premium",
    total: "1200",
    available: "800",
    lifetime: "1500",
    lastActivity: "2025-11-01 10:30 AM",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    segment: "Standard",
    total: "950",
    available: "650",
    lifetime: "1100",
    lastActivity: "2025-10-30 02:45 PM",
  },
];

ModuleRegistry.registerModules([AllEnterpriseModule]);

const Customer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold py-2">Customers</h1>
        <button
          type="button"
          className="web-btn"
          onClick={() => navigate("/add-customer")}
        >
          + Add Customer
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto py-4">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
                  S.No
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
                  Name
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
                  Email
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
                  Segment
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
                  Total
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
                  Available
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
                  Lifetime
                </TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs">
                  Last Activity
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
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {user.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {user.email}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {user.segment}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {user.total}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {user.available}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {user.lifetime}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {user.lastActivity}
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

export default Customer;
