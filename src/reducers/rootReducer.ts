import { AppState, DEFAULT_APP_STATE } from '../store/AppState';

export const rootReducer: (state: AppState | undefined, action: any) => AppState = (
  state: AppState = DEFAULT_APP_STATE,
  action: any,
) => {
  switch (action.type) {
    default:
      return state;
  }
};
