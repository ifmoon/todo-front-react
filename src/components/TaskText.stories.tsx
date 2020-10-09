import React from 'react';

import TaskText from './TaskText';

export default {
  title: 'Components/TaskText',
  component: TaskText,
};

const text = '할 일 목록 1';

export const basic = () => <TaskText isCompleted={false} text={text} />;
export const isCompleted = () => <TaskText isCompleted text={text} />;
