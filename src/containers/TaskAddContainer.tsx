import React, { useState } from 'react';

import { TaskAddButton, TaskAddModal } from '@/components';

const TaskAddContainer = () => {
  const [active, setActive] = useState(false);

  const turnOnModal = () => {
    setActive(true);
  };

  const handleOk = () => {
    setActive(false);
  };

  const handleClose = () => {
    setActive(false);
  };

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
