import { createContext, useContext, useState } from "react";

const userContext = createContext();

export function UserContextProvider(props) {
  const { children } = props;
  const [user, setUser] = useState();

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export const useUser = () => useContext(userContext);
