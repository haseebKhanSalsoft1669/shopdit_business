import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Select, DatePicker, message, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Label from "../../components/form/Label";

const { Dragger } = Upload;

const AddProduct = () => {
  const navigate = useNavigate();

  const uploadProps = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", // Mock API for demo
    onChange(info: any) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
        <h1 className="text-2xl font-semibold capitalize">Add Product</h1>
      </div>

      {/* Form Container */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto p-4">
          <h2 className="text-2xl font-semibold dark:text-white">Product Details</h2>

          <div className="mt-6 md:w-2/4">
            <form>
              <div className="space-y-6">
                {/* Product Name */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Product Name <span className="text-error-500">*</span>
                  </Label>
                  <Input
                    placeholder="Enter Product Name"
                    name="name"
                    type="text"
                    required
                    className="web-input"
                  />
                </div>

                {/* Category */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Category <span className="text-error-500">*</span>
                  </Label>
                  <div className="web-input p-0 !h-[50px] flex items-center">
                    <Select
                      placeholder="Select Category"
                      className="!bg-transparent !border-none !shadow-none w-full"
                      size="large"
                      allowClear
                      bordered={false}
                    >
                      <Select.Option value="Electronics">Electronics</Select.Option>
                      <Select.Option value="Wearables">Wearables</Select.Option>
                      <Select.Option value="Audio">Audio</Select.Option>
                      <Select.Option value="Accessories">Accessories</Select.Option>
                    </Select>
                  </div>
                </div>

                {/* SKU */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    SKU <span className="text-error-500">*</span>
                  </Label>
                  <Input
                    placeholder="Enter SKU"
                    name="sku"
                    type="text"
                    required
                    className="web-input"
                  />
                </div>

                {/* Price */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Price ($) <span className="text-error-500">*</span>
                  </Label>
                  <InputNumber
                    placeholder="Enter Product Price"
                    className="web-input w-full"
                    min={0}
                    prefix="$"
                  />
                </div>

                {/* Stock Quantity */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Stock Quantity <span className="text-error-500">*</span>
                  </Label>
                  <InputNumber
                    placeholder="Enter Available Stock"
                    className="web-input w-full"
                    min={0}
                  />
                </div>

                {/* Status */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Status <span className="text-error-500">*</span>
                  </Label>
                  <div className="web-input p-0 !h-[50px] flex items-center">
                    <Select
                      placeholder="Select Status"
                      className="!bg-transparent !border-none !shadow-none w-full"
                      size="large"
                      allowClear
                      bordered={false}
                    >
                      <Select.Option value="Active">Active</Select.Option>
                      <Select.Option value="Inactive">Inactive</Select.Option>
                      <Select.Option value="Out of Stock">Out of Stock</Select.Option>
                    </Select>
                  </div>
                </div>

                {/* Added On */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Added On <span className="text-error-500">*</span>
                  </Label>
                  <div className="web-input p-0 !h-[50px] flex items-center">
                    <DatePicker
                      className="!border-none !shadow-none w-full"
                      size="large"
                      placeholder="Select Added Date"
                    />
                  </div>
                </div>

                {/* Upload Product Image */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Upload Product Image <span className="text-error-500">*</span>
                  </Label>
                  <Dragger
                    {...uploadProps}
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
                      Support for a single image upload only.
                    </p>
                  </Dragger>
                </div>

                {/* Description */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Description
                  </Label>
                  <TextArea
                    placeholder="Enter Product Description"
                    className="w-full !h-[150px] !resize-none border border-gray-300 rounded-lg p-3 focus:border-[#00BD4E] focus:ring-1 focus:ring-[#00BD4E] outline-none"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-row md:w-1/2 gap-3 mb-6">
                  <Button className="w-full mt-2 site-btn">Save</Button>
                  <Button
                    className="w-full mt-2 site-btn"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
