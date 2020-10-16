import { Layout, Modal, Typography } from 'antd';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { TaskAddButton, TaskList } from '@/components';

import TaskInput, { TaskInputRef } from './components/TaskInput';
import { addTasks } from './features/tasks';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const valueRef = useRef<TaskInputRef>(null);

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
        <TaskList />
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
        <TaskAddButton
          onClick={() => {
            if (valueRef?.current) {
              dispatch(addTasks(valueRef?.current?.value));
            }
          }}
        />
        <Modal>
          <TaskInput ref={valueRef} />
        </Modal>
      </Footer>
    </Layout>
  );
};

export default App;
