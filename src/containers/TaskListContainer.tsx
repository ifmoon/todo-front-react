import React from 'react';

import { TaskList } from '@/components';

const tasks = [
  { id: 1, isCompleted: true, text: 'test1' },
  { id: 2, isCompleted: true, text: 'test1' },
  { id: 1, isCompleted: false, text: 'test1' },
];

const TaskListContainer = () => {
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
};

export default TaskListContainer;
