import { IAction, IAppState } from "./AppContext";
import { AppActions } from "./actions";

export const appReducer = (
  state: IAppState,
  action: IAction<IAppState>
): IAppState => {
  switch (action.type) {
    case AppActions.ACTION_SET_LANGUAGE:
      return { language: action.data?.language || state.language };
    case AppActions.ACTION_INITIALIZE_LANGUAGE:
      return { language: action.data?.language || state.language };
    default:
      return state;
  }
};
