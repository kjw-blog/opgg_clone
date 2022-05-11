import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer, { StateTypes } from './reducer';
import { Reducer, AnyAction } from 'redux';
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';

const isDev = process.env.NODE_ENV === 'development';

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer as Reducer<StateTypes, AnyAction>,
    devTools: isDev,
  });

  return store;
};
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const wrapper = createWrapper(createStore);

export default wrapper;
