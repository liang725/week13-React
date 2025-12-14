import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import SearchQuestion from './components/SearchQuestion';
import QuestionTable from './components/QuestionTable';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

const Admin = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <h1 style={{ color: 'white', margin: 0 }}>Quiz管理系统</h1>
      </Header>
      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={({ key }) => setSelectedKey(key)}
            items={[
              { key: '1', icon: <UserOutlined />, label: '用户管理' },
              { key: '2', icon: <VideoCameraOutlined />, label: '题目管理' }
            ]}
          />
        </Sider>
        <Content style={{ padding: '16px' }}>
          {selectedKey === '1' && (
            <>
              <SearchBar />
              <UserTable />
            </>
          )}
          {selectedKey === '2' && (
            <>
              <SearchQuestion />
              <QuestionTable />
            </>
          )}
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        Quiz管理系统 ©2025 Created by tfzhang
      </Footer>
    </Layout>
  );
};

export default Admin;