import { Input } from 'antd';
import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react';

export interface TodoInputRef {
  value: string;
}

const TodoInput = forwardRef((_, ref: Ref<TodoInputRef>) => {
  const [value, setValue] = useState('');
  useImperativeHandle(ref, () => ({ value }), [value]);

  return <Input value={value} onChange={e => setValue(e.target.value)} />;
});

export default TodoInput;
