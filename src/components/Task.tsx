import { Col, Divider, Row, Space } from 'antd';
import React from 'react';

import { Todo } from '@/types';

import TaskCompleteButton from './TaskCompleteButton';
import TaskDeleteButton from './TaskDeleteButton';
import TaskText from './TaskText';

const Task = ({ isCompleted, text }: Pick<Todo, 'isCompleted' | 'text'>) => {
  return (
    <>
      <Divider />
      <Row justify="space-between">
        <Col span={20}>
          <Space size="middle" align="center">
            <TaskCompleteButton isCompleted={isCompleted} onClick={() => {}} />
            <TaskText text={text} isCompleted={isCompleted} />
          </Space>
        </Col>
        <Col span={2} offset={2}>
          <TaskDeleteButton />
        </Col>
      </Row>
      <Divider />
    </>
  );
};

export default Task;
