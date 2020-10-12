import { Divider } from 'antd';
import React, { Fragment } from 'react';

import { UseTasksType } from '@/hooks/useTasks';

import Task from './Task';

const TaskList = ({
  tasks,
  deleteTask,
  toggleTaskCompleted,
}: Omit<UseTasksType, 'addTask'>) => {
  return (
    <>
      {tasks.map(({ id, isCompleted, text }, index) => (
        <Fragment key={id}>
          {index === 0 && <Divider />}
          <Task
            isCompleted={isCompleted}
            text={text}
            toggleTaskCompleted={() => toggleTaskCompleted(id)}
            deleteTask={() => deleteTask(id)}
          />
          <Divider />
        </Fragment>
      ))}
    </>
  );
};

export default TaskList;
