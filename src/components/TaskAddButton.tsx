import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const TaskAddButton: React.FC = () => {
  return (
    <Button block>
      <PlusOutlined />
      Add a Task...
    </Button>
  );
};

export default TaskAddButton;
