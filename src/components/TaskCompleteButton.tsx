import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

import { Todo } from '@/types';

const TaskCompleteButton = ({
  isCompleted,
  onClick,
}: Pick<Todo, 'isCompleted'> & { onClick: () => void }) => {
  return (
    <Button shape="circle-outline" onClick={onClick}>
      {isCompleted ? <CheckOutlined /> : ' '}
    </Button>
  );
};

export default TaskCompleteButton;
