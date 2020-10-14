import { combineReducers, configureStore } from '@reduxjs/toolkit';

import tasksReducer from './tasks';

const rootReducer = combineReducers({ tasks: tasksReducer });

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
