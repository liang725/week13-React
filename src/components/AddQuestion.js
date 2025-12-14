import { Form, Input, Button, message, Space, Radio } from 'antd';

const { TextArea } = Input;

const AddQuestion = ({ onSuccess }) => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log('添加题目数据: ', values);
    // 这里可以调用API添加题目
    // 模拟API调用
    setTimeout(() => {
      message.success('题目添加成功！');
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

  const labelStyle = {
    color: '#333',
    fontWeight: 'normal',
    fontSize: '14px',
    width: '100px',
    textAlign: 'right',
    paddingRight: '12px'
  };



  const Label = ({ children }) => (
    <span style={labelStyle}>
      {children}：
    </span>
  );

  return (
    <div style={{ padding: '20px 40px' }}>
      <Form
        form={form}
        name="addQuestion"
        onFinish={onFinish}
        layout="horizontal"
        style={{ maxWidth: '800px' }}
      >
        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start' }}>
          <Label>问题内容</Label>
          <div style={{ flex: 1 }}>
            <Form.Item
              name="question"
              rules={[{ required: true, message: '请输入问题内容！' }]}
              style={{ marginBottom: 0 }}
            >
              <TextArea 
                placeholder="请输入问题内容" 
                rows={4}
                showCount
                maxLength={500}
                style={{ 
                  fontSize: '14px',
                  resize: 'none',
                  borderRadius: '6px'
                }}
              />
            </Form.Item>
          </div>
        </div>

        <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
          <Label>选项A</Label>
          <div style={{ flex: 1 }}>
            <Form.Item
              name="optionA"
              rules={[{ required: true, message: '请输入选项A！' }]}
              style={{ marginBottom: 0 }}
            >
              <Input 
                placeholder="请输入选项A" 
                style={{ borderRadius: '6px' }}
              />
            </Form.Item>
          </div>
        </div>

        <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
          <Label>选项B</Label>
          <div style={{ flex: 1 }}>
            <Form.Item
              name="optionB"
              rules={[{ required: true, message: '请输入选项B！' }]}
              style={{ marginBottom: 0 }}
            >
              <Input 
                placeholder="请输入选项B" 
                style={{ borderRadius: '6px' }}
              />
            </Form.Item>
          </div>
        </div>

        <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
          <Label>选项C</Label>
          <div style={{ flex: 1 }}>
            <Form.Item
              name="optionC"
              rules={[{ required: true, message: '请输入选项C！' }]}
              style={{ marginBottom: 0 }}
            >
              <Input 
                placeholder="请输入选项C" 
                style={{ borderRadius: '6px' }}
              />
            </Form.Item>
          </div>
        </div>

        <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
          <Label>选项D</Label>
          <div style={{ flex: 1 }}>
            <Form.Item
              name="optionD"
              rules={[{ required: true, message: '请输入选项D！' }]}
              style={{ marginBottom: 0 }}
            >
              <Input 
                placeholder="请输入选项D" 
                style={{ borderRadius: '6px' }}
              />
            </Form.Item>
          </div>
        </div>

        <div style={{ marginBottom: '50px', display: 'flex', alignItems: 'center' }}>
          <Label>答案</Label>
          <div style={{ flex: 1 }}>
            <Form.Item
              name="answer"
              rules={[{ required: true, message: '请选择正确答案！' }]}
              style={{ marginBottom: 0 }}
            >
              <Radio.Group>
                <Radio value="A" style={{ marginRight: '50px' }}>A</Radio>
                <Radio value="B" style={{ marginRight: '50px' }}>B</Radio>
                <Radio value="C" style={{ marginRight: '50px' }}>C</Radio>
                <Radio value="D">D</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>

        <div style={{ textAlign: 'right', paddingTop: '20px' }}>
          <Space size="middle">
            <Button 
              onClick={onCancel}
              size="large"
              style={{ 
                minWidth: '80px',
                borderRadius: '6px'
              }}
            >
              取消
            </Button>
            <Button 
              type="primary" 
              htmlType="submit"
              size="large"
              style={{ 
                minWidth: '80px',
                borderRadius: '6px'
              }}
            >
              提交
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default AddQuestion;