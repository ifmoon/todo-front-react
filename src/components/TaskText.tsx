import { Typography } from 'antd';
import React from 'react';

import { Todo } from '@/features/tasks';

const { Text } = Typography;
const TaskText = ({
  isCompleted,
  text,
}: Pick<Todo, 'isCompleted' | 'text'>) => {
  return <Text delete={isCompleted}>{text}</Text>;
};

export default TaskText;
