// src/contexts/ContextProvider.jsx

import { createContext, useContext, useState, useEffect } from "react";
import axiosClient from "../api/axios-client";

const StateContext = createContext({
  user: null,
  setUser: () => {},
  logout: () => {},
  loading: true,
});

export const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);   // 🔥 Add loading state

  useEffect(() => {
    axiosClient.get("/api/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);   // 🔥 now loading finished
      });
  }, []);

  const logout = async () => {
    await axiosClient.post("/api/logout").catch(() => {});
    setUser(null);
  };

  return (
    <StateContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);