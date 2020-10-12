import { Col, Row } from 'antd';
import React from 'react';

import { Todo } from '@/types';

import TaskCompleteButton from './TaskCompleteButton';
import TaskDeleteButton from './TaskDeleteButton';
import TaskText from './TaskText';

const Task = ({
  isCompleted,
  text,
  toggleTaskCompleted,
  deleteTask,
}: Pick<Todo, 'isCompleted' | 'text'> & {
  toggleTaskCompleted: () => void;
  deleteTask: () => void;
}) => {
  return (
    <>
      <Row justify="space-around" align="middle">
        <Col span={2} offset={1}>
          <TaskCompleteButton
            isCompleted={isCompleted}
            onClick={toggleTaskCompleted}
          />
        </Col>
        <Col span={18}>
          <TaskText text={text} isCompleted={isCompleted} />
        </Col>
        <Col span={2} offset={1}>
          <TaskDeleteButton onClick={deleteTask} />
        </Col>
      </Row>
    </>
  );
};

export default Task;
