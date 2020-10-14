import React from 'react';

import Task from './Task';

export default {
  title: 'Components/Task',
  component: Task,
};
const task = { text: '할 일 목록', isCompleted: false, id: 'aa' };

export const basic = () => <Task task={task} />;
export const isCompleted = () => <Task task={{ ...task, isCompleted: true }} />;
