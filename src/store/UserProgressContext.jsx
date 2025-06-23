import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showcart: () => {},
  hidecart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showcart() {
    setUserProgress("showcart");
  }
  function hidecart() {
    setUserProgress("");
  }
  function showCheckout() {
    setUserProgress("showCheckout");
  }
  function hideCheckout() {
    setUserProgress("");
  }
  const contextValue = {
    progress: userProgress,
    showcart,
    hidecart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={contextValue}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
