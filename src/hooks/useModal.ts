import { useState } from 'react';

type UseModalProps = {
  handleOkCallback?: () => void;
  handleCloseCallback?: () => void;
};

const useModal = ({ handleOkCallback, handleCloseCallback }: UseModalProps) => {
  const [active, setActive] = useState(false);

  const turnOnModal = () => {
    setActive(true);
  };

  const handleOk = () => {
    if (handleOkCallback) {
      handleOkCallback();
    }
    setActive(false);
  };

  const handleClose = () => {
    if (handleCloseCallback) {
      handleCloseCallback();
    }
    setActive(false);
  };

  return { active, turnOnModal, handleOk, handleClose };
};

export default useModal;
