import { Divider, Empty } from 'antd';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectTasks, Todo } from '@/features/task';

import Task from './Task';

const getTaskComponent = (task: Todo, index: number) => (
  <Fragment key={task.id}>
    {index === 0 && <Divider />}
    <Task task={task} />
    <Divider />
  </Fragment>
);

const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <>{tasks.length > 0 ? <>{tasks.map(getTaskComponent)}</> : <Empty />}</>
  );
};

export default TaskList;
