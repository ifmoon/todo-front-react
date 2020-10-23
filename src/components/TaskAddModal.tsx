import { Modal } from 'antd';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { TaskInput } from '@/components';
import { addTask } from '@/features/task';
import useModal from '@/hooks/useModal';

import TaskAddButton from './TaskAddButton';
import { TaskInputRef } from './TaskInput';

const TaskAddModal = () => {
  const dispatch = useDispatch();
  const valueRef = useRef<TaskInputRef>(null);
  const { active, turnOnModal, handleOk, handleClose } = useModal({
    handleOkCallback: () => {
      if (valueRef.current) {
        dispatch(addTask(valueRef.current.value));
      }
    },
  });

  return (
    <>
      <TaskAddButton onClick={turnOnModal} />
      <Modal
        title="할 일 추가"
        visible={active}
        onOk={handleOk}
        onCancel={handleClose}
      >
        <TaskInput ref={valueRef} />
      </Modal>
    </>
  );
};

export default TaskAddModal;
