import { Modal } from 'antd';
import React from 'react';

import TaskInput from './TaskInput';

const TaskAddModal = ({
  active,
  handleOk,
  handleClose,
}: {
  active: boolean;
  handleOk: () => void;
  handleClose: () => void;
}) => {
  return (
    <Modal
      title="할 일 추가"
      visible={active}
      onOk={handleOk}
      onCancel={handleClose}
    >
      <TaskInput />
    </Modal>
  );
};

export default TaskAddModal;
