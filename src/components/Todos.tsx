import { Divider, Empty } from 'antd';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectTodos } from '@/features/todo';

import TodoType from './Todo';

const Todos = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      {todos.length > 0 ? (
        <>
          {todos.map((todo, index) => (
            <Fragment key={todo.id}>
              {index === 0 && <Divider />}
              <TodoType todo={todo} />
              <Divider />
            </Fragment>
          ))}
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Todos;
