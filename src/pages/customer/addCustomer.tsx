import React, { useState } from "react";
import { Input, Select, Button, Checkbox, Form, message } from "antd";
import { useNavigate } from "react-router";

const { Option } = Select;

const AddCustomer: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Customer Data:", values);
    message.success("Customer added successfully!");
    setTimeout(() => {
      setLoading(false);
      navigate("/customers");
    }, 1500);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 dark:bg-white/[0.02] dark:border-white/[0.05]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold py-2">Add Customer</h1>
        <Button className="web-btn" onClick={() => navigate(-1)}>
          Back to List
        </Button>
      </div>

      {/* Form */}
      <Form
        layout="vertical"
        onFinish={onFinish}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter full name" }]}
        >
          <Input placeholder="Enter full name" size="large" className="web-input" />
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Enter a valid email address" },
          ]}
        >
          <Input placeholder="Enter email" size="large" className="web-input" />
        </Form.Item>

        <Form.Item
          label="Customer Segment"
          name="segment"
          rules={[{ required: true, message: "Please select segment" }]}
        >
          <Select placeholder="Select segment" size="large" className="web-input">
            <Option value="Premium">Premium</Option>
            <Option value="Standard">Standard</Option>
            <Option value="Basic">Basic</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Total Spent"
          name="total"
          rules={[{ required: true, message: "Please enter total amount" }]}
        >
          <Input placeholder="Enter total amount" size="large" className="web-input" />
        </Form.Item>

        <Form.Item
          label="Available Balance"
          name="available"
          rules={[{ required: true, message: "Please enter available balance" }]}
        >
          <Input placeholder="Enter available balance" size="large" className="web-input" />
        </Form.Item>

        <Form.Item
          label="Lifetime Value"
          name="lifetime"
          rules={[{ required: true, message: "Please enter lifetime value" }]}
        >
          <Input placeholder="Enter lifetime value" size="large" className="web-input" />
        </Form.Item>

        {/* Preferences Section */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-2 font-semibold text-gray-700">
            Preferences
          </label>
          <div className="space-y-2">
            <Checkbox className="block font-semibold">Email Notifications</Checkbox>
            <Checkbox className="block font-semibold">SMS Alerts</Checkbox>
            <Checkbox className="block font-semibold">Promotional Offers</Checkbox>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            className="web-btn"
          >
            Save Customer
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddCustomer;
