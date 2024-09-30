import React from 'react';
import { Layout } from 'antd';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ backgroundColor: '#fff', padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <Outlet /> {/* This will render the page content */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Your Company ©2024</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
