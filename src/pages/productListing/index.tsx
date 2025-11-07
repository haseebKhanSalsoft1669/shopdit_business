import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Pagination } from "antd";
import { useNavigate } from "react-router";
import {
  ModuleRegistry
} from "ag-grid-community";
import { AllEnterpriseModule } from "ag-grid-enterprise";

interface Product {
  id: number;
  name: string;
  category: string;
  sku: string;
  price: string;
  stock: string;
  status: string;
  addedOn: string;
}

const tableData: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    sku: "WH-12345",
    price: "$99.99",
    stock: "150",
    status: "Active",
    addedOn: "2025-10-20",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Wearables",
    sku: "SW-98765",
    price: "$149.50",
    stock: "320",
    status: "Active",
    addedOn: "2025-09-30",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    category: "Audio",
    sku: "BS-33221",
    price: "$59.99",
    stock: "90",
    status: "Out of Stock",
    addedOn: "2025-09-25",
  },
];

ModuleRegistry.registerModules([AllEnterpriseModule]);

const ProductListing = () => {
  const navigate = useNavigate();

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
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs"
                >
                  S.No
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs"
                >
                  Product Name
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs"
                >
                  Category
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs"
                >
                  SKU
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs"
                >
                  Price
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs"
                >
                  Stock
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs"
                >
                  Status
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs"
                >
                  Added On
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    #{index + 1}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {product.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {product.category}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {product.sku}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {product.price}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {product.stock}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {product.status}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-700 text-start text-theme-sm">
                    {product.addedOn}
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

export default ProductListing;
