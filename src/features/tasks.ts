import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/features';

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

const name = 'tasks';
const initialState: Todo[] = [];

const slice = createSlice({
  name,
  initialState,
  reducers: {
    addTasks: (state, { payload }: PayloadAction<string>) => {
      state.push({ id: nanoid(), text: payload, isCompleted: false });
    },
    deleteTasks: (state, { payload }: PayloadAction<string>) => {
      return state.filter(task => task.id !== payload);
    },
    toggleTaskCompleted: (state, { payload }: PayloadAction<string>) => {
      return state.map(task =>
        task.id === payload
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      );
    },
  },
});

export const { addTasks, deleteTasks, toggleTaskCompleted } = slice.actions;
export const selectTasks = (state: RootState) => state.tasks;

export default slice.reducer;
