import { Input } from 'antd';
import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react';

export interface TaskInputRef {
  value: string;
}

const TaskInput = forwardRef((_, ref: Ref<TaskInputRef>) => {
  const [value, setValue] = useState('');
  useImperativeHandle(ref, () => ({ value }), [value]);

  return <Input value={value} onChange={e => setValue(e.target.value)} />;
});

export default TaskInput;
