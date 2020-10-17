import { Divider } from 'antd';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectTasks } from '@/features/task';

import Task from './Task';

const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <>
      {tasks.map((task, index) => (
        <Fragment key={task.id}>
          {index === 0 && <Divider />}
          <Task task={task} />
          <Divider />
        </Fragment>
      ))}
    </>
  );
};

export default TaskList;
