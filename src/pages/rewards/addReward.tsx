import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Input, DatePicker, Select, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router";
import Label from "../../components/form/Label";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const AddReward = () => {
  const navigate = useNavigate();

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
        <h1 className="text-2xl font-semibold capitalize">Add Reward</h1>
      </div>

      {/* Form Container */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto p-4">
          <h2 className="text-2xl font-semibold dark:text-white">Reward Details</h2>

          <div className="mt-6 md:w-2/4">
            <form>
              <div className="space-y-6">
                {/* Reward Name */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Reward Name <span className="text-error-500">*</span>
                  </Label>
                  <Input
                    placeholder="Enter Reward Name"
                    name="name"
                    type="text"
                    required
                    className="web-input"
                  />
                </div>

                {/* Reward Type */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Type <span className="text-error-500">*</span>
                  </Label>
                  <div className="web-input p-0 !h-[50px] flex items-center">
                    <Select
                      placeholder="Select Reward Type"
                      className="!bg-transparent !border-none !shadow-none w-full"
                      size="large"
                      allowClear
                      bordered={false}
                    >
                      <Select.Option value="Discount">Discount</Select.Option>
                      <Select.Option value="Product">Product</Select.Option>
                      <Select.Option value="Voucher">Voucher</Select.Option>
                      <Select.Option value="Gift">Gift</Select.Option>
                    </Select>
                  </div>
                </div>

                {/* Points Cost */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Points Cost <span className="text-error-500">*</span>
                  </Label>
                  <InputNumber
                    placeholder="Enter Points Cost"
                    className="web-input w-full"
                    min={0}
                  />
                </div>

                {/* Reward Value */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Value ($) <span className="text-error-500">*</span>
                  </Label>
                  <InputNumber
                    placeholder="Enter Reward Value"
                    className="web-input w-full"
                    min={0}
                    prefix="$"
                  />
                </div>

                {/* Validity Date Range */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Validity Period <span className="text-error-500">*</span>
                  </Label>
                  <div className="web-input p-0 !h-[50px] flex items-center">
                    <RangePicker
                      className="!border-none !shadow-none w-full"
                      size="large"
                      defaultValue={[
                        dayjs("2025-01-01", "YYYY-MM-DD"),
                        dayjs("2025-12-31", "YYYY-MM-DD"),
                      ]}
                    />
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Availability (Qty) <span className="text-error-500">*</span>
                  </Label>
                  <InputNumber
                    placeholder="Enter Available Quantity"
                    className="web-input w-full"
                    min={0}
                  />
                </div>

                {/* Description */}
                <div>
                  <Label className="font-semibold !text-black dark:!text-white">
                    Description
                  </Label>
                  <TextArea
                    placeholder="Enter reward description"
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

export default AddReward;
