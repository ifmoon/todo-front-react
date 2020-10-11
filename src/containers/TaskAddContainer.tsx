import React from 'react';

import { TaskAddButton, TaskAddModal } from '@/components';
import useModal from '@/hooks/useModal';

const TaskAddContainer = () => {
  const { active, handleClose, handleOk, turnOnModal } = useModal({
    handleOkCallback: () => {},
  });

  return (
    <>
      <TaskAddButton onClick={turnOnModal} />
      <TaskAddModal
        active={active}
        handleOk={handleOk}
        handleClose={handleClose}
      />
    </>
  );
};

export default TaskAddContainer;
