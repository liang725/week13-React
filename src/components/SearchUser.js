import { Input, Space, Button, Modal } from 'antd';
import { useState } from 'react';
import AddUser from './AddUser';

const { Search } = Input;

const SearchUser = ({ onSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Space style={{ margin: '16px 0 16px 16px' }}>
        <span>用户名</span>
        <Search
          placeholder="请输入用户名"
          allowClear
          enterButton="查询用户"
          size="large"
          onSearch={(value) => onSearch && onSearch(value)}
        />
        <Button type="primary" onClick={showModal}>
          添加用户
        </Button>
      </Space>
      
      <Modal
        title="添加用户"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <AddUser onSuccess={handleOk} />
      </Modal>
    </>
  );
};

export default SearchUser;