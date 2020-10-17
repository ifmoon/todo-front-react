import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTasks, Todo, toggleTaskCompleted } from '@/features/task';

import TaskCompleteButton from './TaskCompleteButton';
import TaskDeleteButton from './TaskDeleteButton';
import TaskText from './TaskText';

const Task = ({ task }: { task: Todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Row justify="space-around" align="middle">
        <Col span={2} offset={1}>
          <TaskCompleteButton
            isCompleted={task.isCompleted}
            onClick={() => {
              dispatch(toggleTaskCompleted(task.id));
            }}
          />
        </Col>
        <Col span={18}>
          <TaskText text={task.text} isCompleted={task.isCompleted} />
        </Col>
        <Col span={2} offset={1}>
          <TaskDeleteButton
            onClick={() => {
              dispatch(deleteTasks(task.id));
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Task;
