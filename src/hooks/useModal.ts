import { useState } from 'react';

type UseModalProps = {
  handleOkCallback: () => void;
};

const useModal = ({ handleOkCallback }: UseModalProps) => {
  const [active, setActive] = useState(false);

  const turnOnModal = () => {
    setActive(true);
  };

  const handleOk = () => {
    handleOkCallback();
    setActive(false);
  };

  const handleClose = () => {
    setActive(false);
  };

  return { active, turnOnModal, handleOk, handleClose };
};

export default useModal;
