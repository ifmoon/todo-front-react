import { Typography } from 'antd';
import React from 'react';

import { TodoType } from '@/features/todo';

const { Text } = Typography;

const TodoText = ({
  isCompleted,
  text,
}: Pick<TodoType, 'isCompleted' | 'text'>) => {
  return <Text delete={isCompleted}>{text}</Text>;
};

export default TodoText;
