import { act, renderHook } from '@testing-library/react-hooks';

import useModal from './useModal';

describe('turnOnModal', () => {
  it('should set value true', () => {
    const { result } = renderHook(() => useModal({}));

    expect(result.current.active).toEqual(false);

    act(() => {
      result.current.turnOnModal();
    });

    expect(result.current.active).toBe(true);
  });
});

describe('handleClose', () => {
  it('should set value false', () => {
    const { result } = renderHook(() => useModal({}));

    expect(result.current.active).toEqual(false);

    act(() => {
      result.current.turnOnModal();
      result.current.handleClose();
    });

    expect(result.current.active).toBe(false);
  });
});
