import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router";
import { FiUploadCloud, FiX } from "react-icons/fi"; // icons

const { Option } = Select;

interface BusinessProfileFormValues {
  fullName: string;
  lastName: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

const BusinessProfileForm: React.FC = () => {
  const [form] = Form.useForm<BusinessProfileFormValues>();
  const navigate = useNavigate();

  const [images, setImages] = useState<File[]>([]);

  const handleSubmit = (values: BusinessProfileFormValues) => {
    console.log("Form Submitted:", values, images);
    navigate("/login");
  };

  // Add new files
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages((prev) => [...prev, ...newFiles]);
    }
  };

  // Remove file
  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="md:w-4xl my-4">
      <div className="bg-white p-8 rounded-lg">
        <div className="mb-5 sm:mb-8">
          <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md text-center">
            Business Profile
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Fill out this form to create business profile.
          </p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          autoComplete="off"
          requiredMark={false}
          className="auth-form"
        >
          {/* First + Last Name */}
          <div className="form-row">
            <Form.Item
              name="businesName"
              label="Business Name*"
              rules={[
                { required: true, message: "Please enter your Business Name" },
              ]}
              className="form-col"
            >
              <Input placeholder="Enter Business Name" className="web-input" />
            </Form.Item>

            <Form.Item
              name="businessType"
              label="Business Type*"
              rules={[
                { required: true, message: "Please select your Business Type" },
              ]}
              className="form-col"
            >
              <Select placeholder="Business Type" className="web-input">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </div>

          {/* Email + Gender */}
          <div className="form-row">
            <Form.Item
              name="businessSubCategory"
              label="Business Sub Category*"
              rules={[
                {
                  required: true,
                  message: "Please enter your Business Sub Category",
                },
              ]}
              className="form-col"
            >
              <Input
                placeholder="Enter Business Sub Category"
                className="web-input"
              />
            </Form.Item>

            <Form.Item
              name="Address01"
              label="Address 01*"
              rules={[{ required: true, message: "Please enter Address 01" }]}
              className="form-col"
            >
              <Input placeholder="Enter Address 01" className="web-input" />
            </Form.Item>
          </div>

          {/* Address */}
          <div className="form-row">
            <Form.Item
              name="Address02"
              label="Address 02*"
              rules={[{ required: true, message: "Please enter Address 02" }]}
              className="form-col"
            >
              <Input placeholder="Enter Address 02" className="web-input" />
            </Form.Item>
            <Form.Item
              name="zipCode"
              label="Zip Code*"
              rules={[{ required: true, message: "Please enter Zip Code" }]}
              className="form-col"
            >
              <Input placeholder="Enter Zip Code" className="web-input" />
            </Form.Item>
          </div>

          {/* Image Upload Section */}
          <Form.Item label="Upload Image*">
            <div
              className="image-upload-box border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center h-[200px] cursor-pointer"
              onClick={() =>
                document.getElementById("fileInput")?.click()
              }
            >
              <FiUploadCloud className="text-4xl text-gray-400 mb-2" />
              <p className="text-gray-500">Upload Images</p>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </Form.Item>

          {/* Image Preview */}
          {images.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-4">
              {images.map((file, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border rounded-lg overflow-hidden image-preview"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600"
                  >
                    <FiX size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="mt-4 web-btn"
              onClick={() => navigate("/subscription-plan")}
            >
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BusinessProfileForm;
