

import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select
} from "antd";

const { Option } = Select;

interface ViewCampaignValues {
  campaignName: string;
  campaignTrigger: string;
  onEvent: string;
  withDelay: string;
  userGroup: string;
  promotionType: string;
}

const ViewCampaign = () => {
  const [form] = Form.useForm<ViewCampaignValues>();
  const navigate = useNavigate();

  const handleSubmit = (values: ViewCampaignValues) => {
    console.log("Form Submitted:", values);
    navigate("/login"); // static redirect after submit
  };

  return (
    <>
      <div className="flex items-center mb-6">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="cursor-pointer mr-2"
        />
        <h1 className="text-2xl font-bold">CAMPAIGN MANAGEMENT</h1>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto p-4">
          <Row>
            <Col xs={24} md={18} lg={16}>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
                requiredMark={false}
                className="auth-form"
              >
                {/* Campaign Name + Trigger */}
                <div className="form-row">
                  <Form.Item
                    name="campaignName"
                    label="Campaign Name"
                    rules={[{ required: true, message: "Please enter your Campaign Name" }]}
                    className="form-col"
                  >
                    <Input placeholder="Enter Campaign Name" className="web-input" />
                  </Form.Item>

                  <Form.Item
                    name="campaignTrigger"
                    label="Campaign Trigger"
                    rules={[{ required: true, message: "Please select your Campaign Trigger" }]}
                    className="form-col"
                  >
                    <Select placeholder="Select" className="web-input">
                      <Option value="trigger1">Campaign Trigger</Option>
                      <Option value="trigger2">Campaign Trigger</Option>
                      <Option value="trigger3">Campaign Trigger</Option>
                    </Select>
                  </Form.Item>
                </div>

                {/* On Event + With Delay */}
                <div className="form-row">
                  <Form.Item
                    name="onEvent"
                    label="On Event"
                    rules={[{ required: true, message: "Please select your On Event" }]}
                    className="form-col"
                  >
                    <Select placeholder="Select" className="web-input">
                      <Option value="event1">On Event</Option>
                      <Option value="event2">On Event</Option>
                      <Option value="event3">On Event</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="withDelay"
                    label="With Delay"
                    rules={[{ required: true, message: "Please select your With Delay" }]}
                    className="form-col"
                  >
                    <Select placeholder="Select" className="web-input">
                      <Option value="delay1">With Delay</Option>
                      <Option value="delay2">With Delay</Option>
                      <Option value="delay3">With Delay</Option>
                    </Select>
                  </Form.Item>
                </div>

                {/* User Group + Promotion Type */}
                <div className="form-row">
                  <Form.Item
                    name="userGroup"
                    label="User Group"
                    rules={[{ required: true, message: "Please select your User Group" }]}
                    className="form-col"
                  >
                    <Select placeholder="Select" className="web-input">
                      <Option value="group1">User Group</Option>
                      <Option value="group2">User Group</Option>
                      <Option value="group3">User Group</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="promotionType"
                    label="Promotion Type"
                    rules={[{ required: true, message: "Please select your Promotion Type" }]}
                    className="form-col"
                  >
                    <Select placeholder="Select" className="web-input">
                      <Option value="promo1">Promotion Type</Option>
                      <Option value="promo2">Promotion Type</Option>
                      <Option value="promo3">Promotion Type</Option>
                    </Select>
                    <p className="text-[#F6075A]">(Choose the promotion you would like to send your customers)</p>
                  </Form.Item>
                </div>

                {/* Submit Button */}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="mt-4 web-btn"
                    onClick={() => navigate("/")}
                  >
                    Continue
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ViewCampaign;
