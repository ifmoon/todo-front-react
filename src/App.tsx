import { Layout, Typography } from 'antd';
import React from 'react';

import { TaskAddContainer, TaskListContainer } from '@/containers';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
        }}
      >
        <Title level={1} style={{ color: '#eee' }}>
          To Do List
        </Title>
      </Header>
      <Content style={{ margin: '64px 0px 80px 0px' }}>
        <TaskListContainer />
      </Content>
      <Footer
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          left: 0,
          bottom: 0,
        }}
      >
        <TaskAddContainer />
      </Footer>
    </Layout>
  );
};

export default App;
