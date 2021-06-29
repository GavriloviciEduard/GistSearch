import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [gists, setGists] = useState([]);
  const [username, setUsername] = useState("");

  const updateGists = (gists) => {
    setGists(gists);
  };

  const updateUsername = (username) => {
    setUsername(username);
  };

  return (
    <AppContext.Provider
      value={{ updateGists, gists, updateUsername, username }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
