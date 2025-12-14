import { Space, Table, Button, message } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const columns = [
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
                    onClick={() => {
                        message.info('点击编辑');
                        console.log('编辑用户', record);
                    }}
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

const UserTable = () => {
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: 100,
        showSizeChanger: false,
        position: ['bottomLeft'],
    });
    const [loading, setLoading] = useState(false);

    const fetchData = (page = 1, pageSize = 5) => {
        setLoading(true);
    
        setTimeout(() => {
            const startIndex = (page - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const pageData = mockUsers.slice(startIndex, endIndex);
            
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
                total: 100,
            }));
            
            setLoading(false);
        }, 500);
    };

    useEffect(() => {
        fetchData(1, 5);
    }, []);

    const handleTableChange = (pag) => {
        fetchData(pag.current, pag.pageSize);
    };

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    );
};

export default UserTable;