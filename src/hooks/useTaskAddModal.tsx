import { Modal } from 'antd';
import { ModalFuncProps } from 'antd/lib/modal';
import React, { useCallback, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';

import TodoInput, { TodoInputRef } from '@/components/TaskInput';
import { addTodo } from '@/features/todo';

const useTaskAddModal = () => {
  const valueRef = useRef<TodoInputRef>(null);
  const dispatch = useDispatch();

  const handleOk = useCallback(() => {
    if (!valueRef.current) return;
    dispatch(addTodo(valueRef.current?.value));
  }, [dispatch]);

  const config: ModalFuncProps = useMemo(
    () => ({
      title: '할 일 추가',
      content: <TodoInput ref={valueRef} />,
      onOk: handleOk,
      maskClosable: true,
      icon: null,
    }),
    [handleOk],
  );

  const openTaskAddModal = () => {
    Modal.confirm(config);
  };

  return { openTaskAddModal };
};

export default useTaskAddModal;
