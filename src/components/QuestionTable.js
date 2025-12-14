import React, { useState } from 'react';
import { Space, Table, Button, message, Modal, Form, Input, Radio } from 'antd';

const { TextArea } = Input;

const getColumns = (handleEdit) => [
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
                        console.log('删除题目', record);
                    }}
                >
                    删除
                </Button>
            </Space>
        ),
    },
];

const allData = [
    {
        key: '1',
        id: '1',
        question: '什么是React？',
        options: ['一个JavaScript库', '一个CSS框架', '一个编程语言', '一个数据库'],
        answer: 'A'
    },
    {
        key: '2',
        id: '2',
        question: 'React中的JSX是什么？',
        options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extension'],
        answer: 'A'
    },
    {
        key: '3',
        id: '3',
        question: 'React的虚拟DOM有什么优势？',
        options: ['提高性能', '减少内存占用', '简化代码', '增强安全性'],
        answer: 'A'
    },
    {
        key: '4',
        id: '4',
        question: 'React组件的生命周期方法componentDidMount在什么时候调用？',
        options: ['组件挂载后', '组件更新前', '组件卸载前', '组件渲染时'],
        answer: 'A'
    },
    {
        key: '5',
        id: '5',
        question: 'React中的state和props有什么区别？',
        options: ['state是可变的，props是不可变的', 'state是不可变的，props是可变的', '两者都是可变的', '两者都是不可变的'],
        answer: 'A'
    },
    {
        key: '6',
        id: '6',
        question: 'React Hooks中的useState返回什么？',
        options: ['数组，包含状态值和更新函数', '对象，包含状态值和更新函数', '只返回状态值', '只返回更新函数'],
        answer: 'A'
    },
    {
        key: '7',
        id: '7',
        question: 'useEffect Hook的第二个参数是什么？',
        options: ['依赖数组', '回调函数', '状态值', '组件引用'],
        answer: 'A'
    },
    {
        key: '8',
        id: '8',
        question: 'React中的key属性有什么作用？',
        options: ['帮助React识别列表项的变化', '设置组件的唯一标识', '用于CSS样式', '用于事件绑定'],
        answer: 'A'
    },
    {
        key: '9',
        id: '9',
        question: 'React中的条件渲染可以使用哪些方式？',
        options: ['三元运算符和逻辑与运算符', '只能使用if语句', '只能使用switch语句', '只能使用for循环'],
        answer: 'A'
    },
    {
        key: '10',
        id: '10',
        question: 'React中的事件处理函数如何绑定this？',
        options: ['使用箭头函数或bind方法', '自动绑定', '使用call方法', '使用apply方法'],
        answer: 'A'
    },
    {
        key: '11',
        id: '11',
        question: 'React Router用于什么？',
        options: ['客户端路由管理', '服务器端路由', '数据路由', '组件路由'],
        answer: 'A'
    },
    {
        key: '12',
        id: '12',
        question: 'Redux的三个核心原则是什么？',
        options: ['单一数据源、状态只读、纯函数修改', '多数据源、状态可变、函数修改', '单一数据源、状态可变、纯函数修改', '多数据源、状态只读、函数修改'],
        answer: 'A'
    },
    {
        key: '13',
        id: '13',
        question: 'React中的Context API用于什么？',
        options: ['跨组件传递数据', '组件间通信', '状态管理', '路由管理'],
        answer: 'A'
    },
    {
        key: '14',
        id: '14',
        question: 'React.memo的作用是什么？',
        options: ['优化函数组件性能', '缓存组件状态', '记录组件渲染次数', '保存组件数据'],
        answer: 'A'
    },
    {
        key: '15',
        id: '15',
        question: 'React中的懒加载如何实现？',
        options: ['React.lazy和Suspense', '动态import', 'webpack代码分割', '手动分割代码'],
        answer: 'A'
    },
    {
        key: '16',
        id: '16',
        question: 'React中的错误边界是什么？',
        options: ['捕获子组件错误的组件', '防止内存泄漏的机制', '组件渲染边界', '状态更新边界'],
        answer: 'A'
    },
    {
        key: '17',
        id: '17',
        question: 'React中的ref用于什么？',
        options: ['访问DOM元素或组件实例', '引用外部资源', '设置组件引用', '创建组件链接'],
        answer: 'A'
    },
    {
        key: '18',
        id: '18',
        question: 'React中的高阶组件(HOC)是什么？',
        options: ['接受组件并返回新组件的函数', '继承自React.Component的组件', '具有高级功能的组件', '性能优化的组件'],
        answer: 'A'
    },
    {
        key: '19',
        id: '19',
        question: 'React中的render props模式是什么？',
        options: ['通过函数prop共享代码的技术', '渲染组件属性', '组件渲染方法', '属性渲染模式'],
        answer: 'A'
    },
    {
        key: '20',
        id: '20',
        question: 'React Fiber是什么？',
        options: ['React的新协调算法', 'React的新组件类型', 'React的新状态管理', 'React的新路由系统'],
        answer: 'A'
    },
    {
        key: '21',
        id: '21',
        question: 'JavaScript中的闭包是什么？',
        options: ['函数和其词法环境的组合', '封闭的代码块', '私有变量', '函数的返回值'],
        answer: 'A'
    },
    {
        key: '22',
        id: '22',
        question: 'JavaScript中的原型链是什么？',
        options: ['对象继承的机制', '函数调用链', '变量作用域链', '事件传播链'],
        answer: 'A'
    },
    {
        key: '23',
        id: '23',
        question: 'ES6中的箭头函数有什么特点？',
        options: ['没有自己的this绑定', '可以作为构造函数', '有arguments对象', '可以使用yield'],
        answer: 'A'
    },
    {
        key: '24',
        id: '24',
        question: 'Promise的三种状态是什么？',
        options: ['pending、fulfilled、rejected', 'waiting、success、error', 'loading、done、failed', 'start、end、cancel'],
        answer: 'A'
    },
    {
        key: '25',
        id: '25',
        question: 'async/await是什么？',
        options: ['处理异步操作的语法糖', '新的数据类型', '循环语句', '条件语句'],
        answer: 'A'
    }
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const QuestionTable = ({ searchKeyword }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [form] = Form.useForm();
    
    // 根据搜索关键词过滤数据
    const filteredData = searchKeyword 
        ? allData.filter(item => {
            const matchQuestion = item.question.toLowerCase().includes(searchKeyword.toLowerCase());
            const matchOptions = item.options.some(option => option.toLowerCase().includes(searchKeyword.toLowerCase()));
            return matchQuestion || matchOptions;
          })
        : allData;
    
    console.log('搜索关键词:', searchKeyword);
    console.log('过滤后的数据数量:', filteredData.length);
    
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
        total: filteredData.length,
        showSizeChanger: false,
        showQuickJumper: false,
        position: ['bottomLeft'],
    });

    // 当搜索关键词变化时，重置到第一页
    React.useEffect(() => {
        setCurrentPage(1);
        setPagination(prev => ({
            ...prev,
            current: 1,
            total: filteredData.length
        }));
    }, [searchKeyword, filteredData.length]);

    const handlePageChange = (pag) => {
        console.log('页码变化:', pag.current);
        setCurrentPage(pag.current);
        setPagination(prev => ({
            ...prev,
            current: pag.current
        }));
    };

    const handleEdit = (record) => {
        setEditingRecord(record);
        form.setFieldsValue({
            question: record.question,
            optionA: record.options[0],
            optionB: record.options[1],
            optionC: record.options[2],
            optionD: record.options[3],
            answer: record.answer,
        });
        setEditModalVisible(true);
    };

    const handleEditSubmit = () => {
        form.validateFields().then(values => {
            console.log('编辑题目数据:', values);
            // 这里可以调用API更新题目
            message.success('题目更新成功！');
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
                dataSource={filteredData}
                pagination={{
                    ...pagination,
                    total: filteredData.length
                }}
                onChange={handlePageChange}
            />
            
            <Modal
                title="编辑题目"
                open={editModalVisible}
                onOk={handleEditSubmit}
                onCancel={handleEditCancel}
                width={600}
                okText="保存"
                cancelText="取消"
            >
                <Form
                    form={form}
                    layout="vertical"
                    style={{ marginTop: 20 }}
                >
                    <Form.Item
                        name="question"
                        label="问题内容"
                        rules={[{ required: true, message: '请输入问题内容！' }]}
                    >
                        <TextArea 
                            placeholder="请输入问题内容" 
                            rows={3}
                            showCount
                            maxLength={500}
                        />
                    </Form.Item>

                    <Form.Item
                        name="optionA"
                        label="选项A"
                        rules={[{ required: true, message: '请输入选项A！' }]}
                    >
                        <Input placeholder="请输入选项A" />
                    </Form.Item>

                    <Form.Item
                        name="optionB"
                        label="选项B"
                        rules={[{ required: true, message: '请输入选项B！' }]}
                    >
                        <Input placeholder="请输入选项B" />
                    </Form.Item>

                    <Form.Item
                        name="optionC"
                        label="选项C"
                        rules={[{ required: true, message: '请输入选项C！' }]}
                    >
                        <Input placeholder="请输入选项C" />
                    </Form.Item>

                    <Form.Item
                        name="optionD"
                        label="选项D"
                        rules={[{ required: true, message: '请输入选项D！' }]}
                    >
                        <Input placeholder="请输入选项D" />
                    </Form.Item>

                    <Form.Item
                        name="answer"
                        label="正确答案"
                        rules={[{ required: true, message: '请选择正确答案！' }]}
                    >
                        <Radio.Group>
                            <Radio value="A">A</Radio>
                            <Radio value="B">B</Radio>
                            <Radio value="C">C</Radio>
                            <Radio value="D">D</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default QuestionTable;