import { Input, Space, Button, Modal } from 'antd';
import { useState } from 'react';
import AddQuestion from './AddQuestion';

const { Search } = Input;

const SearchQuestion = ({ onSearch }) => {
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
        <span>题目</span>
        <Search
          placeholder="请输入关键词"
          allowClear
          enterButton="查询题目"
          size="large"
          onSearch={(value) => onSearch && onSearch(value)}
        />
        <Button type="primary" onClick={showModal}>
          添加题目
        </Button>
      </Space>
      
      <Modal
        title="添加题目"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={700}
      >
        <AddQuestion onSuccess={handleOk} />
      </Modal>
    </>
  );
};

export default SearchQuestion;