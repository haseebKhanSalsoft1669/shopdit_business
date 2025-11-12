import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Pagination } from "antd";
import Badge from "../../components/ui/badge/Badge";
import { useEffect } from "react";
import { useGetAllOrdersQuery } from "../../redux/services/orderService";
import usePagination from "../../utils/usePagination";

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
  const { pageNumber, limit, totalDocs, handlePageChange, updateTotalDocs } =
    usePagination(10);

  const {
    data: orders,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetAllOrdersQuery({
    page: pageNumber,
    limit,
  });

  useEffect(() => {
    if (orders?.data?.totalDocs) {
      updateTotalDocs(orders.data.totalDocs);
    }
  }, [orders, updateTotalDocs]);

  useEffect(() => {
    refetch();
  }, [pageNumber, limit, refetch]);

  const docs = isFetching ? [] : orders?.data?.docs || [];

  if (isLoading) return <p>Loading orders...</p>;
  if (isError) return <p>Failed to load orders.</p>;

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold py-2">Order Management</h1>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto py-4">
          {isFetching ? (
            <p className="text-center py-6">Loading ...</p>
          ) : (
            <Table>
              <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    S.No
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Customer Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Date
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Sub-Total
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Email
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Products
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-center text-gray-500"
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {docs.map((order: any, index: number) => (
                  <TableRow key={order._id || index}>
                    <TableCell className="px-5 py-4 text-start">
                      #{(pageNumber - 1) * limit + index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      {order?.personName || "N/A"}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      {new Date(order?.createdAt).toLocaleDateString() || "-"}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      ${order?.subTotal || "-"}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      {order?.user?.email || "-"}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      {order?.products?.length || 0}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-center">
                      <Badge size="sm" color={getStatusColor(order.status)}>
                        {order?.status || "Unknown"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        <div className="p-4">
          <Pagination
            align="end"
            current={pageNumber}
            total={totalDocs}
            pageSize={limit}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default OrderManagement;
