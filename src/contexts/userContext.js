import { createContext, useContext, useReducer } from "react";

const userContext = createContext();

const userReducer = (state, action) => {
  if (action.type === "sign-in") {
    return { ...action.payload.userData };
  }
  if (action.type === "sign-out") {
    return undefined;
  }
  return state;
};

export function UserContextProvider(props) {
  const { children } = props;
  const [user, userDispatch] = useReducer(userReducer, undefined);

  const signIn = (userData) =>
    userDispatch({ type: "sign-in", payload: { userData } });

  const signOut = () => userDispatch({ type: "sign-out" });

  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => useContext(userContext);
