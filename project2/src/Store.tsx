import { createContext, useReducer } from 'react';

interface ActionPayload {
  payload: object | null;
  type: string | null;
}
type Props = {
  children?: JSX.Element;
};
interface StoreContextInterface {
  state: State;
  dispatch: React.Dispatch<any>;
}
type State = typeof initialState;

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo') || '{}')
    : null,
};

export const Store = createContext<StoreContextInterface | null>(null);

function reducer(state: State, action: ActionPayload) {
  switch (action.type) {
    case 'USER_SIGNIN':
      return { userInfo: action.payload };
    case 'USER_SIGNOUT':
      return {
        userInfo: null,
      };
    default:
      return { ...state };
  }
}
export function StoreProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
