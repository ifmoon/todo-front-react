import React from 'react';

import TaskCompleteButton from './TaskCompleteButton';

export default {
  title: 'Components/TaskCompleteButton',
  component: TaskCompleteButton,
};

export const basic = () => (
  <TaskCompleteButton isCompleted={false} onClick={() => {}} />
);
export const isCompleted = () => (
  <TaskCompleteButton isCompleted onClick={() => {}} />
);
