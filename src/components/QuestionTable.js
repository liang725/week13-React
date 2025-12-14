import { Space, Table, Button, message } from 'antd';

const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '问题',
        dataIndex: 'question',
        key: 'question',
        render: (text) => <span style={{ color: '#1890ff', cursor: 'pointer' }}>{text}</span>,
    },
    {
        title: '选项',
        dataIndex: 'options',
        key: 'options',
        render: (options) => (
            <span style={{ maxWidth: '400px', display: 'inline-block' }}>
                {options.join(' | ')}
            </span>
        )
    },
    {
        title: '答案',
        dataIndex: 'answer',
        key: 'answer',
        render: (answer, record) => {
            // 根据答案字母找到对应的选项内容
            const answerIndex = answer.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
            const answerContent = record.options[answerIndex] || answer;
            return <span style={{ color: '#000', fontWeight: 'normal' }}>{answerContent}</span>;
        },
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
                        console.log('编辑题目', record);
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
                        console.log('删除题目', record);
                    }}
                >
                    删除
                </Button>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        id: '1',
        question: '什么是React？',
        options: ['A. 一个库', 'B. 一个框架', 'C. 一个语言', 'D. 一个工具'],
        answer: 'A'
    },
    {
        key: '2',
        id: '2',
        question: 'React的生命周期函数有哪些？',
        options: ['A. componentDidMount', 'B. componentDidUpdate', 'C. componentWillUnmount', 'D. render'],
        answer: 'A'
    },
    {
        key: '3',
        id: '3',
        question: 'React的状态管理有哪些方式？',
        options: ['A. Redux', 'B. MobX', 'C. Context API', 'D. Zustand'],
        answer: 'A'
    },
    {
        key: '4',
        id: '4',
        question: 'React的性能优化手段有哪些？',
        options: ['A. 代码分割', 'B. 懒加载', 'C. 服务器端渲染', 'D. 缓存'],
        answer: 'A'
    },
    {
        key: '5',
        id: '5',
        question: 'React的路由管理有哪些方式？',
        options: ['A. React Router', 'B. Next.js', 'C. Reach Router', 'D. Gatsby'],
        answer: 'A'
    }
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const QuestionTable = () => (
    <Table
        columns={columns}
        dataSource={data}
        pagination={{
            current: 1,
            pageSize: 5,
            total: 100,
            showSizeChanger: false,
            position: ['bottomLeft'],
            onChange: () => { /* 页码或每页条数变化时的回调 */ },
        }}
        onChange={onChange}
    />
);

export default QuestionTable;