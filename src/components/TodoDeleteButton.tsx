import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const TaskDeleteButtonStyle = {
  color: '#a62c00',
};

const TodoDeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button shape="circle" type="text">
      <CloseOutlined style={TaskDeleteButtonStyle} onClick={onClick} />
    </Button>
  );
};

export default TodoDeleteButton;
