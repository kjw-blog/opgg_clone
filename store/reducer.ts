import { AnyAction, CombinedState, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import common, { CommonState } from './common/common';

export interface StateTypes {
  common: CommonState;
}

const rootReducer = (
  state: StateTypes,
  action: AnyAction
): CombinedState<StateTypes> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        common,
      });

      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
