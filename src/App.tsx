import { Input, Layout, Modal, Typography } from 'antd';
import React, { useState } from 'react';

import { TaskAddButton, TaskList } from '@/components';
import { useModal, useTasks } from '@/hooks';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const App = () => {
  const [value, setValue] = useState('');
  const { tasks, addTask, deleteTask, toggleTaskCompleted } = useTasks();
  const { active, handleClose, handleOk, turnOnModal } = useModal({
    handleOkCallback: () => {
      addTask(value);
      setValue('');
    },
    handleCloseCallback: () => {
      setValue('');
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

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
        <TaskList
          tasks={tasks}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
        />
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
        <TaskAddButton onClick={turnOnModal} />
        <Modal
          title="할 일 추가"
          visible={active}
          onOk={handleOk}
          onCancel={handleClose}
        >
          <Input
            value={value}
            onChange={handleInputChange}
            placeholder="할 일 목록"
          />
        </Modal>
      </Footer>
    </Layout>
  );
};

export default App;
