import React from 'react';
import { Layout, Menu } from 'antd';
import {PoweroffOutlined , HomeOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ flex: 1, minWidth: 0 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UploadOutlined />}>
          <Link to="upload-chat">Upload</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="user-profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PoweroffOutlined />}>
         <LogoutButton/>
         {/* or */}
         {/* <Link to="/Login-register">Logout</Link> */}
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
