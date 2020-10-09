import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

const TaskDeleteButtonStyle = {
  color: '#a62c00',
};

const TaskDeleteButton: React.FC = () => {
  return (
    <Button shape="circle" type="text">
      <CloseOutlined style={TaskDeleteButtonStyle} />
    </Button>
  );
};

export default TaskDeleteButton;
