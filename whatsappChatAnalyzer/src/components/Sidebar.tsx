import React from 'react';
import {PoweroffOutlined ,CustomerServiceOutlined ,SnippetsFilled ,WechatOutlined ,HomeOutlined , UploadOutlined, UserOutlined, VideoCameraOutlined ,AreaChartOutlined } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { theme } from 'antd';
import Footer from './Footer';

const { Sider, Content } = Layout;

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          
          console.log(collapsed, type);
        }}
        style={{ height: '100vh', }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />} >
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="about">About</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="upload-chat">Upload Chat</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<WechatOutlined />}>
          <Link to="chat-details">Chat Details</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<AreaChartOutlined />}>
          <Link to="graphs-patterns">Graphs</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<SnippetsFilled  />}>
          <Link to="overall-result"> Overall Result</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<CustomerServiceOutlined />}>
          <Link to="help&support">Help & Support</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<PoweroffOutlined /> }>
          <Link to="/logout">Logout</Link>
          </Menu.Item>
         
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0 ' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              marginLeft:33,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
