import { Modal } from 'antd';
import { ModalFuncProps } from 'antd/lib/modal';
import React, { useCallback, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';

import TaskInput, { TaskInputRef } from '@/components/TaskInput';
import { addTask } from '@/features/task';

const useTaskAddModal = () => {
  const valueRef = useRef<TaskInputRef>(null);
  const dispatch = useDispatch();

  const handleOk = useCallback(() => {
    if (!valueRef.current) return;
    dispatch(addTask(valueRef.current?.value));
  }, [dispatch]);

  const config: ModalFuncProps = useMemo(
    () => ({
      title: '할 일 추가',
      content: <TaskInput ref={valueRef} />,
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
