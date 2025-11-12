import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Pagination } from "antd";
import { useNavigate } from "react-router";
import { ModuleRegistry } from "ag-grid-community";
import { AllEnterpriseModule } from "ag-grid-enterprise";
import { useSelector } from "react-redux";
import { useGetBusinessProductsQuery } from "../../redux/services/productService";
import usePagination from "../../utils/usePagination";
import { useEffect } from "react";

ModuleRegistry.registerModules([AllEnterpriseModule]);

const ProductListing = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.auth);
  const businessProfileId = user?.activeProfile;

  const { pageNumber, limit, totalDocs, handlePageChange, updateTotalDocs } =
    usePagination(10);

  const { data, isLoading, isFetching, isError } = useGetBusinessProductsQuery({
    businessProfileId,
    page: pageNumber,
    limit,
  });

  const products = isFetching ? [] : data?.data?.docs || [];

  useEffect(() => {
    if (data?.data?.totalDocs) {
      updateTotalDocs(data.data.totalDocs);
    }
  }, [data?.data?.totalDocs, updateTotalDocs]);

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products.</p>;

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold py-2">Product Listing</h1>
        <button
          type="button"
          className="web-btn"
          onClick={() => navigate("/add-product")}
        >
          + Add Product
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto py-4">
          {isFetching ? (
            <p className="text-center py-6">Loading...</p>
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
                    Product Name
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Price
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Description
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Reward Points
                  </TableCell>
                  <TableCell
                    isHeader
                    className="px-5 py-3 text-start text-gray-500"
                  >
                    Added On
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {products.map((product: any, index: number) => (
                  <TableRow key={product._id || index}>
                    <TableCell className="px-5 py-4 text-start">
                      #{(pageNumber - 1) * limit + index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      {product.productName}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      {product.price}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      {product.description || "-"}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      {product.rewardPoints || 0}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 text-start">
                      {new Date(product.createdAt).toLocaleDateString() || "-"}
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

export default ProductListing;
