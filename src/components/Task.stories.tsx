import React from 'react';

import Task from './Task';

export default {
  title: 'Components/Task',
  component: Task,
};
const text = '할 일 목록 1';

export const basic = () => <Task isCompleted={false} text={text} />;
export const isCompleted = () => <Task isCompleted text={text} />;
