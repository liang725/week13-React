# Quiz管理系统

基于React + Ant Design开发的Quiz管理系统前端应用。

## 功能特性

- 用户登录认证
- 用户管理（查询、添加、编辑、删除）
- 题目管理（查询、添加、编辑、删除）
- 响应式布局设计
- JWT令牌认证

## 技术栈

- React 19.2.3
- Ant Design 6.1.0
- React Router DOM 7.8.2
- Axios (HTTP客户端)

## 项目结构

```
src/
├── App.js          # 主应用组件，路由配置
├── Login.js        # 登录页面
├── Admin.js        # 管理后台主页面
├── UserTable.js    # 用户表格组件
├── SearchBar.js    # 用户搜索栏组件
├── AddNew.js       # 添加用户表单组件
├── QuestionTable.js # 题目表格组件
├── SearchQuestion.js # 题目搜索栏组件
├── App.css         # 样式文件
└── index.js        # 应用入口
```

## 安装和运行

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动

### 构建生产版本
```bash
npm run build
```

## 使用说明

1. **登录**: 访问应用后会自动跳转到登录页面
   - 默认用户名: admin
   - 默认密码: 123456

2. **用户管理**: 登录后可以查看、搜索、添加用户

3. **题目管理**: 切换到题目管理页面可以管理Quiz题目

## 后端接口

应用需要配合后端API使用，主要接口包括：

- `POST /login` - 用户登录
- `GET /users` - 获取用户列表（需要JWT认证）

## 部署

1. 构建项目: `npm run build`
2. 将build目录部署到Web服务器
3. 配置Nginx反向代理处理跨域请求

## 开发说明

- 使用localStorage存储登录状态和JWT令牌
- 支持路由守卫，未登录用户自动跳转到登录页
- 使用Ant Design组件库保证UI一致性

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
