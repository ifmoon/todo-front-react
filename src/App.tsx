import { Layout, Typography } from 'antd';
import React from 'react';

import { TodoAddButton, Todos } from '@/components';

import useTaskAddModal from './hooks/useTaskAddModal';
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
  const { openTaskAddModal } = useTaskAddModal();

  return (
    <Layout style={LayoutStyle}>
      <Header style={HeaderStyle}>
        <Title level={1} style={TitleStyle}>
          To Do List
        </Title>
      </Header>
      <Content style={ContentStyle}>
        <Todos />
      </Content>
      <Footer style={FooterStyle}>
        <TodoAddButton onClick={openTaskAddModal} />
      </Footer>
    </Layout>
  );
};

export default App;
