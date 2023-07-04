import React, { useReducer } from "react";
import { IntlProvider } from "react-intl";
import { AppActions } from "./actions";
import { appReducer } from "./AppReducer";
import enMessages from "@/locales/en.json";
import trMessages from "@/locales/tr.json";

export interface IAppState {
  language: string;
}

export interface IAction<T> {
  type: AppActions;
  data?: T;
}

export interface IContext<T> {
  state: T;
  dispatch: React.Dispatch<IAction<T>>;
}

export const initialState: IContext<IAppState> = {
  state: {
    language: "en",
  },
  dispatch: () => {},
};

const AppContext = React.createContext(initialState);
interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState.state);

  const messages: Record<string, { [key: string]: string }> = {
    en: enMessages,
    tr: trMessages,
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <IntlProvider locale={state.language} messages={messages[state.language]}>
        {children}
      </IntlProvider>
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
