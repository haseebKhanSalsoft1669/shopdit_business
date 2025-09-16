import {
  EyeInvisibleOutlined,
  EyeOutlined
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select
} from "antd";
import React from "react";
import { Link, useNavigate } from "react-router";

const { Option } = Select;

interface SignUpFormValues {
  fullName: string;
  lastName: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [form] = Form.useForm<SignUpFormValues>();
  const navigate = useNavigate();

  const handleSubmit = (values: SignUpFormValues) => {
    console.log("Form Submitted:", values);
    navigate("/login"); // static redirect after submit
  };

  return (
    <div className="md:w-4xl my-4">
    <div className="bg-white p-8 rounded-lg">
      

         <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md text-center">
            Create Account
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Fill out this form to sign up
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
              name="fullName"
              label="First Name*"
              rules={[{ required: true, message: "Please enter your First name" }]}
              className="form-col"
            >
              <Input placeholder="Enter First Name" className="web-input" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name*"
              rules={[{ required: true, message: "Please enter Last Name" }]}
              className="form-col"
            >
              <Input placeholder="Enter Last Name" className="web-input" />
            </Form.Item>
          </div>

          {/* Email + Gender */}
          <div className="form-row">
            <Form.Item
              name="email"
              label="Email Address*"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" }
              ]}
              className="form-col"
            >
              <Input placeholder="Enter Email Address" className="web-input" />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender*"
              rules={[{ required: true, message: "Please select your gender" }]}
              className="form-col"
            >
              <Select placeholder="Select Gender"  className="web-input">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </div>

  

          {/* Password + Confirm Password */}
          <div className="form-row">
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please enter your password" }]}
              className="form-col"
            >
              <Input.Password
                placeholder="••••••••"
                className="password-filed-login web-input"
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
                
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Passwords do not match")
                    );
                  }
                })
              ]}
              className="form-col"
            >
              <Input.Password
                placeholder="••••••••"
                className="password-filed-login web-input"
                iconRender={(visible) =>
                  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </div>

             {/* Privacy Policy */}
             <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>
              By signing up, you are agreeing to our{" "}
              <Link
                to="/terms"
                className="terms-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/terms", "_blank", "noopener,noreferrer");
                }}
              >
                Terms & Condition {" "}
              </Link> 
                and  {" "}
               <Link
                to="/privacy"
                className="terms-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/privacy", "_blank", "noopener,noreferrer");
                }}
              >
                 Privacy Policy
              </Link>.
            </Checkbox>
          </Form.Item>

     
          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="mt-4 web-btn"
              onClick={() => navigate("/business-profile")}
            >
              Update Now
            </Button>
          </Form.Item>

          {/* Already have account */}
          <div className="auth-prompt">
            <span>Already have an account? </span>
            <Button
              className="auth-link"
              onClick={() => navigate("/signin")}
            >
               SIGN IN
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
