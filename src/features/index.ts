import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todoReducer from './todo';

const rootReducer = combineReducers({ todo: todoReducer });

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
