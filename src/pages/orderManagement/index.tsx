
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Pagination } from "antd";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router";
import Badge from "../../components/ui/badge/Badge";

// Define order type
interface Order {
  id: number;
  customerName: string;
  orderId: string;
  date: string;
  total: string;
  paymentMethod: string;
  status: string;
}

// Sample data
const orders: Order[] = [
  {
    id: 1,
    customerName: "John Doe",
    orderId: "#1001",
    date: "2025-11-01",
    total: "$250.00",
    paymentMethod: "Credit Card",
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Sarah Smith",
    orderId: "#1002",
    date: "2025-10-30",
    total: "$120.00",
    paymentMethod: "PayPal",
    status: "Delivered",
  },
  {
    id: 3,
    customerName: "Michael Lee",
    orderId: "#1003",
    date: "2025-10-28",
    total: "$90.00",
    paymentMethod: "Cash on Delivery",
    status: "Cancelled",
  },
  {
    id: 4,
    customerName: "Emma Brown",
    orderId: "#1004",
    date: "2025-10-27",
    total: "$310.00",
    paymentMethod: "Credit Card",
    status: "Processing",
  },
];

// Map order status → badge color
const getStatusColor = (
  status: string
): "success" | "warning" | "error" | "primary" => {
  switch (status) {
    case "Delivered":
      return "success";
    case "Pending":
      return "warning";
    case "Cancelled":
      return "error";
    case "Processing":
      return "primary";
    default:
      return "primary";
  }
};

const OrderManagement = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold py-2">Order Management</h1>
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
                  Customer Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Order ID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Date
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Total
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Payment Method
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {orders.map((order, index) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 text-start">
                    #{index + 1}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start">
                    {order.customerName}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start">
                    {order.orderId}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start">
                    {order.date}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start">
                    {order.total}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start">
                    {order.paymentMethod}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center">
                    <Badge size="sm" color={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start">
                    <Eye
                      className="w-5 h-5 cursor-pointer text-gray-500 hover:text-primary"
                      onClick={() => navigate(`/order-management/${order.id}`)}
                    />
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

export default OrderManagement;
