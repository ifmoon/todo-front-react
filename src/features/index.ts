import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
