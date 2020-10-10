import { Col, Row } from 'antd';
import React from 'react';

import { Todo } from '@/types';

import TaskCompleteButton from './TaskCompleteButton';
import TaskDeleteButton from './TaskDeleteButton';
import TaskText from './TaskText';

const Task = ({ isCompleted, text }: Pick<Todo, 'isCompleted' | 'text'>) => {
  return (
    <>
      <Row justify="space-around" align="middle">
        <Col span={2} offset={1}>
          <TaskCompleteButton isCompleted={isCompleted} onClick={() => {}} />
        </Col>
        <Col span={18}>
          <TaskText text={text} isCompleted={isCompleted} />
        </Col>
        <Col span={2} offset={1}>
          <TaskDeleteButton />
        </Col>
      </Row>
    </>
  );
};

export default Task;
