import { Form, Input, Button, message, Space } from 'antd';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 18 } },
};

const AddUser = ({ onSuccess }) => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log('添加用户数据: ', values);
    // 这里可以调用API添加用户
    // 模拟API调用
    setTimeout(() => {
      message.success('用户添加成功！');
      form.resetFields();
      if (onSuccess) {
        onSuccess();
      }
    }, 500);
  };

  const onCancel = () => {
    form.resetFields();
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="addUser"
      onFinish={onFinish}
      scrollToFirstError
      style={{ marginTop: 16 }}
    >
      <Form.Item
        name="username"
        label="用户名"
        rules={[{
          required: true,
          message: '请输入用户名！',
        }, {
          min: 3,
          message: '用户名至少3个字符！',
        }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[{
          required: true,
          message: '请输入密码！',
        }, {
          min: 6,
          message: '密码至少6个字符！',
        }]}
        hasFeedback
      >
        <Input.Password placeholder="请输入密码" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[{
          required: true,
          message: '请确认密码！',
        }, ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('两次输入的密码不一致！'));
          },
        })]}
      >
        <Input.Password placeholder="请再次输入密码" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button onClick={onCancel}>
            取消
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddUser;