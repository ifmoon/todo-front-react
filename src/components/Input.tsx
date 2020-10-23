import { Input as AntdInput } from 'antd';
import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react';

export interface InputRef {
  value: string;
}

const Input = forwardRef((_, ref: Ref<InputRef>) => {
  const [value, setValue] = useState('');
  useImperativeHandle(ref, () => ({ value }), [value]);

  return <AntdInput value={value} onChange={e => setValue(e.target.value)} />;
});

export default Input;
