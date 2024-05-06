import { createContext, useContext } from "react";

const UserConfirmationContext = createContext();

export const UserConfirmationProvider = ({ children }) => {
  const test = "Hello World !!";

  return (
    <UserConfirmationContext.Provider value={{ test }}>
      {children}
    </UserConfirmationContext.Provider>
  );
};

export const useCnfModal = () => {
  const cnfContext = useContext(UserConfirmationContext);

  return cnfContext;
};
