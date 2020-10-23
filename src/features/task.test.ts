import taskReducer, {
  addTodo,
  deleteTodo,
  initialState,
  toggleTodoCompleted,
} from './todo';

const dummyTask = { id: '1', text: '1', isCompleted: false };

describe('todo reducer', () => {
  it('[addTodo] todo가 추가되어야 한다.', () => {
    const dummyText = 'test';
    const state = taskReducer(initialState, addTodo(dummyText));
    expect(state.length).toEqual(1);
    expect(state[0].text).toEqual(dummyText);
    expect(state[0].isCompleted).toEqual(false);
  });
  it('[deleteTodo] param으로 주어진 id를 가진 todo가 제거되어야 한다.', () => {
    const state = taskReducer([...initialState, dummyTask], deleteTodo('1'));
    expect(state.length).toEqual(0);
    expect(state).toEqual([]);
  });
  it('[deleteTodo] param으로 주어진 id를 가진 todo가 없으면 아무 동작도 하지 않는다.', () => {
    const state = taskReducer([...initialState, dummyTask], deleteTodo('2'));
    expect(state.length).toEqual(1);
    expect(state).toEqual([...initialState, dummyTask]);
  });
  it('[toggleTodoCompleted] param으로 주어진 id를 가진 todo의 isCompleted가 true라면 false로 바꾼다.', () => {
    const state = taskReducer(
      [...initialState, { ...dummyTask, isCompleted: true }],
      toggleTodoCompleted('1'),
    );
    expect(state).toEqual([
      ...initialState,
      { ...dummyTask, isCompleted: false },
    ]);
  });
  it('[toggleTodoCompleted] param으로 주어진 id를 가진 todo의 isCompleted가 false라면 true로 바꾼다.', () => {
    const state = taskReducer(
      [...initialState, dummyTask],
      toggleTodoCompleted('1'),
    );
    expect(state).toEqual([
      ...initialState,
      { ...dummyTask, isCompleted: true },
    ]);
  });
});
