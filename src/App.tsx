import { Layout, Typography } from 'antd';
import React from 'react';

import { TaskAddModal, TaskList } from '@/components';

import {
  ContentStyle,
  FooterStyle,
  HeaderStyle,
  LayoutStyle,
  TitleStyle,
} from './styles';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout style={LayoutStyle}>
      <Header style={HeaderStyle}>
        <Title level={1} style={TitleStyle}>
          To Do List
        </Title>
      </Header>
      <Content style={ContentStyle}>
        <TaskList />
      </Content>
      <Footer style={FooterStyle}>
        <TaskAddModal />
      </Footer>
    </Layout>
  );
};

export default App;
