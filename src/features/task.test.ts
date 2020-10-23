import taskReducer, {
  addTask,
  deleteTask,
  initialState,
  toggleTaskCompleted,
} from './task';

const dummyTask = { id: '1', text: '1', isCompleted: false };

describe('task reducer', () => {
  it('[addTask] task가 추가되어야 한다.', () => {
    const dummyText = 'test';
    const state = taskReducer(initialState, addTask(dummyText));
    expect(state.length).toEqual(1);
    expect(state[0].text).toEqual(dummyText);
    expect(state[0].isCompleted).toEqual(false);
  });
  it('[deleteTask] param으로 주어진 id를 가진 task가 제거되어야 한다.', () => {
    const state = taskReducer([...initialState, dummyTask], deleteTask('1'));
    expect(state.length).toEqual(0);
    expect(state).toEqual([]);
  });
  it('[deleteTask] param으로 주어진 id를 가진 task가 없으면 아무 동작도 하지 않는다.', () => {
    const state = taskReducer([...initialState, dummyTask], deleteTask('2'));
    expect(state.length).toEqual(1);
    expect(state).toEqual([...initialState, dummyTask]);
  });
  it('[toggleTaskCompleted] param으로 주어진 id를 가진 task의 isCompleted가 true라면 false로 바꾼다.', () => {
    const state = taskReducer(
      [...initialState, { ...dummyTask, isCompleted: true }],
      toggleTaskCompleted('1'),
    );
    expect(state).toEqual([
      ...initialState,
      { ...dummyTask, isCompleted: false },
    ]);
  });
  it('[toggleTaskCompleted] param으로 주어진 id를 가진 task의 isCompleted가 false라면 true로 바꾼다.', () => {
    const state = taskReducer(
      [...initialState, dummyTask],
      toggleTaskCompleted('1'),
    );
    expect(state).toEqual([
      ...initialState,
      { ...dummyTask, isCompleted: true },
    ]);
  });
});
