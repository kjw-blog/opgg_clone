import { createSlice } from '@reduxjs/toolkit';

export interface CommonState {
  isDarkMode: boolean;
}

const name = 'common';

const initialState: CommonState = {
  isDarkMode: false,
};

const reducers = {
  set_darkMode(state: CommonState) {
    state.isDarkMode = !state.isDarkMode;
  },
};

const common = createSlice({
  name,
  initialState,
  reducers,
});

export default common.reducer;
export const commonActions = common.actions;
