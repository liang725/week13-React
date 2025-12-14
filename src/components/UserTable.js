import { Space, Table, Button, message, Modal, Form, Input } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const getColumns = (handleEdit) => [
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        render: (text) => (
            <Space>
                <CalendarOutlined style={{ color: '#1890ff' }} />
                <span>{text}</span>
            </Space>
        ),
    },
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span style={{ color: '#1890ff', cursor: 'pointer' }}>{text}</span>,
    },
    {
        title: '密码',
        dataIndex: 'password',
        key: 'password',
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button 
                    type="link" 
                    size="small" 
                    onClick={() => handleEdit(record)}
                >
                    编辑
                </Button>
                <Button 
                    type="link" 
                    size="small" 
                    danger 
                    onClick={() => {
                        message.success('删除成功');
                        console.log('删除用户', record);
                    }}
                >
                    删除
                </Button>
            </Space>
        ),
    },
];

// 模拟用户数据
const mockUsers = [
    {
        key: '1',
        id: '1',
        name: '张三',
        password: '123456',
        date: '2016-05-02'
    },
    {
        key: '2',
        id: '2',
        name: '李四',
        password: '123456',
        date: '2016-05-04'
    },
    {
        key: '3',
        id: '3',
        name: '王五',
        password: '123456',
        date: '2016-05-01'
    },
    {
        key: '4',
        id: '4',
        name: '赵六',
        password: '123456',
        date: '2016-05-03'
    },
    {
        key: '5',
        id: '5',
        name: '钱七',
        password: '123456',
        date: '2016-05-05'
    },
    {
        key: '6',
        id: '6',
        name: '孙八',
        password: '123456',
        date: '2016-05-06'
    },
    {
        key: '7',
        id: '7',
        name: '周九',
        password: '123456',
        date: '2016-05-07'
    },
    {
        key: '8',
        id: '8',
        name: '吴十',
        password: '123456',
        date: '2016-05-08'
    }
];

const UserTable = ({ searchKeyword }) => {
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 100,
        showSizeChanger: false,
        showQuickJumper: false,
        position: ['bottomLeft'],
    });
    const [loading, setLoading] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [form] = Form.useForm();

    const fetchData = (page = 1, pageSize = 5) => {
        setLoading(true);
    
        setTimeout(() => {
            // 根据搜索关键词过滤数据
            const filteredUsers = searchKeyword 
                ? mockUsers.filter(user => 
                    user.name.toLowerCase().includes(searchKeyword.toLowerCase())
                  )
                : mockUsers;
            
            const startIndex = (page - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const pageData = filteredUsers.slice(startIndex, endIndex);
            
            setData(pageData.map((item) => ({
                key: item.key,
                id: item.id,
                name: item.name,
                password: item.password,
                date: item.date,
            })));

            setPagination((prev) => ({
                ...prev,
                current: page,
                pageSize: pageSize,
                total: filteredUsers.length,
            }));
            
            setLoading(false);
        }, 500);
    };

    useEffect(() => {
        fetchData(1, 5);
    }, [searchKeyword]);

    const handleTableChange = (pag) => {
        fetchData(pag.current, pag.pageSize);
    };

    const handleEdit = (record) => {
        setEditingRecord(record);
        form.setFieldsValue({
            name: record.name,
            password: record.password,
        });
        setEditModalVisible(true);
    };

    const handleEditSubmit = () => {
        form.validateFields().then(values => {
            console.log('编辑用户数据:', values);
            // 这里可以调用API更新用户
            message.success('用户更新成功！');
            setEditModalVisible(false);
            form.resetFields();
        }).catch(info => {
            console.log('验证失败:', info);
        });
    };

    const handleEditCancel = () => {
        setEditModalVisible(false);
        form.resetFields();
    };

    return (
        <>
            <Table
                columns={getColumns(handleEdit)}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            
            <Modal
                title="编辑用户"
                open={editModalVisible}
                onOk={handleEditSubmit}
                onCancel={handleEditCancel}
                width={500}
                okText="保存"
                cancelText="取消"
            >
                <Form
                    form={form}
                    layout="vertical"
                    style={{ marginTop: 20 }}
                >
                    <Form.Item
                        name="name"
                        label="用户名"
                        rules={[{ required: true, message: '请输入用户名！' }]}
                    >
                        <Input placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[{ required: true, message: '请输入密码！' }]}
                    >
                        <Input.Password placeholder="请输入密码" />
                    </Form.Item>


                </Form>
            </Modal>
        </>
    );
};

export default UserTable;