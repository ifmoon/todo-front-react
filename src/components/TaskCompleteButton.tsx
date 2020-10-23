import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import { TodoType } from '@/features/todo';

const TaskCompleteButton = ({
  isCompleted,
  onClick,
}: Pick<TodoType, 'isCompleted'> & { onClick: () => void }) => {
  return (
    <Button shape="circle-outline" onClick={onClick}>
      {isCompleted ? <CheckOutlined /> : ' '}
    </Button>
  );
};

export default TaskCompleteButton;
