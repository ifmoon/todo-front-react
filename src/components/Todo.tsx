import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTodo, TodoType, toggleTodoCompleted } from '@/features/todo';

import TaskCompleteButton from './TaskCompleteButton';
import TaskDeleteButton from './TaskDeleteButton';
import TodoText from './TodoText';

const Todo = ({ todo: { id, isCompleted, text } }: { todo: TodoType }) => {
  const dispatch = useDispatch();

  return (
    <Row justify="space-around" align="middle">
      <Col span={2} offset={1}>
        <TaskCompleteButton
          isCompleted={isCompleted}
          onClick={() => {
            dispatch(toggleTodoCompleted(id));
          }}
        />
      </Col>
      <Col span={18}>
        <TodoText text={text} isCompleted={isCompleted} />
      </Col>
      <Col span={2} offset={1}>
        <TaskDeleteButton
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
        />
      </Col>
    </Row>
  );
};

export default React.memo(Todo);
