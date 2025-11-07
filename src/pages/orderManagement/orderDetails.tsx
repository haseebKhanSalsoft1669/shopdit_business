import { ArrowLeftOutlined, InboxOutlined } from "@ant-design/icons";
import { Button, Input, Select, Upload, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router";
import Label from "../../components/form/Label";
import Badge from "../../components/ui/badge/Badge";

const { Dragger } = Upload;

const OrderDetails = () => {
  const navigate = useNavigate();

  // Upload mock config
  const props = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info: any) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // Example order data (mock)
  const order = {
    id: "#1002",
    customerName: "Sarah Smith",
    email: "sarah.smith@example.com",
    phone: "+1 555 890 1234",
    date: "2025-10-30",
    status: "Delivered",
    paymentMethod: "PayPal",
    shippingAddress: "1234 Elm Street, New York, NY 10001",
    products: "2 × T-Shirts, 1 × Jeans",
    totalAmount: "$120.00",
    notes: "Leave the package at the front door.",
  };

  // Determine badge color
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

  return (
    <>
      {/* Header */}
      <div className="flex items-center gap-2 py-2">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          className="!p-0 !text-black"
        />
        <h1 className="text-2xl font-semibold capitalize">Order Details</h1>
      </div>

      {/* Order Info Card */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto p-4">
          <h2 className="text-2xl font-semibold dark:text-white">
            Order Information
          </h2>

          <div className="mt-6 md:w-2/4">
            <form>
              <div className="space-y-6">
                {/* Order ID */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Order ID
                  </Label>
                  <Input
                    value={order.id}
                    disabled
                    className="web-input !bg-gray-50"
                  />
                </div>

                {/* Customer Name */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Customer Name
                  </Label>
                  <Input
                    value={order.customerName}
                    disabled
                    className="web-input !bg-gray-50"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Email
                  </Label>
                  <Input
                    value={order.email}
                    disabled
                    className="web-input !bg-gray-50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Phone
                  </Label>
                  <Input
                    value={order.phone}
                    disabled
                    className="web-input !bg-gray-50"
                  />
                </div>

                {/* Date */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Order Date
                  </Label>
                  <Input
                    value={order.date}
                    disabled
                    className="web-input !bg-gray-50"
                  />
                </div>

                {/* Status */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Status
                  </Label>
                  <div className="flex items-center gap-3">
                    <Badge size="sm" color={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                    <div className="web-input p-0 !h-[50px] flex items-center">
                      <Select
                        placeholder="Change Status"
                        className="!bg-transparent !border-none !shadow-none w-full"
                        size="large"
                        allowClear
                        bordered={false}
                        defaultValue={order.status}
                      >
                        <Select.Option value="Pending">Pending</Select.Option>
                        <Select.Option value="Processing">
                          Processing
                        </Select.Option>
                        <Select.Option value="Delivered">
                          Delivered
                        </Select.Option>
                        <Select.Option value="Cancelled">
                          Cancelled
                        </Select.Option>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Payment Method
                  </Label>
                  <Input
                    value={order.paymentMethod}
                    disabled
                    className="web-input !bg-gray-50"
                  />
                </div>

                {/* Address */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Shipping Address
                  </Label>
                  <Input
                    value={order.shippingAddress}
                    disabled
                    className="web-input !bg-gray-50"
                  />
                </div>

                {/* Products */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Products
                  </Label>
                  <TextArea
                    value={order.products}
                    className="w-full !h-[100px] !resize-none border border-gray-300 rounded-lg p-3"
                    disabled
                  />
                </div>

                {/* Total */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Total Amount
                  </Label>
                  <Input
                    value={order.totalAmount}
                    disabled
                    className="web-input !bg-gray-50"
                  />
                </div>

                {/* Notes */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Customer Notes
                  </Label>
                  <TextArea
                    value={order.notes}
                    className="w-full !h-[150px] !resize-none border border-gray-300 rounded-lg p-3"
                    disabled
                  />
                </div>

                {/* Upload Section */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Upload Invoice (Optional)
                  </Label>
                  <Dragger
                    {...props}
                    className="rounded-lg border-gray-300 bg-gray-50 hover:bg-[#E6F7EC] transition-all duration-300"
                    style={{
                      padding: "40px",
                      width: "100%",
                    }}
                  >
                    <p className="ant-upload-drag-icon text-[#00BD4E]">
                      <InboxOutlined style={{ fontSize: "40px" }} />
                    </p>
                    <p className="ant-upload-text text-gray-700 font-semibold">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint text-gray-500 text-sm">
                      Support for a single upload. Upload order-related documents only.
                    </p>
                  </Dragger>
                </div>

                {/* Buttons */}
                <div className="flex flex-row md:w-1/2 gap-3 mb-6">
                  <Button className="w-full mt-2 web-btn">Update</Button>
                  <Button className="w-full mt-2 web-btn">Cancel</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
