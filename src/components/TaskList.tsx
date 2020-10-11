import { Divider } from 'antd';
import React from 'react';

import { Todo } from '@/types';

import Task from './Task';

const TaskList = ({ tasks }: { tasks: Todo[] }) => {
  return (
    <>
      {tasks.map(({ id, isCompleted, text }, index) => (
        <>
          {index === 0 && <Divider />}
          <Task key={id} isCompleted={isCompleted} text={text} />
          <Divider />
        </>
      ))}
    </>
  );
};

export default TaskList;
