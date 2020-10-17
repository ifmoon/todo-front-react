import taskReducer, { addTasks, initialState } from './task';

describe('task reducer', () => {
  it('[addTasks] should add 1 task', () => {
    const dummyText = 'test';
    const state = taskReducer(initialState, addTasks(dummyText));
    expect(state.length).toEqual(1);
    expect(state[0].text).toEqual(dummyText);
    expect(state[0].isCompleted).toEqual(false);
  });
});
