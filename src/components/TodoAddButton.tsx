import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const TodoAddButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button block onClick={onClick}>
      <PlusOutlined />
      Add a Task...
    </Button>
  );
};

export default TodoAddButton;
