import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

function RegisterPage() {

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-300 shadow-sm p-5 rounded w-[420px]">
        <h1 className="text-xl font-bold">Register</h1>
        <p className="text-sm font-semibold text-gray-500 mb-5">
          create an account to get started with our service
        </p>
        <hr className="border-gray-300 my-5" />
        <Form layout="vertical" className="flex flex-col gap-5"
          onFinish={onFinish} 
        > 
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your Name" }]}
          >
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email" }]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password" }]}
          >
            <Input placeholder="Password"
              type="password"
             />
          </Form.Item>
          <Button block type="primary"
            htmlType="submit">
            Register
          </Button>
          <p className="text-sm text-gray-500 text-center my-3">
            Already have an account?{" "}
            <Link  to="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
export default RegisterPage;
