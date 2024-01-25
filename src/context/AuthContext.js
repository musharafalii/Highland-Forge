// AuthContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  const createUser = (name, email, password) => {
    const newUser = { name, email, password };
    setUser(newUser);
    saveUserToLocalStorage(newUser);
  };

  const signIn = (email, password) => {
    const storedUser = getUserFromLocalStorage();

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser({});
    removeUserFromLocalStorage();
  };

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

// Helper functions for local storage

const localStorageKey = 'userInfo';

const getUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem(localStorageKey);
  return storedUser ? JSON.parse(storedUser) : {};
};

const saveUserToLocalStorage = (user) => {
  localStorage.setItem(localStorageKey, JSON.stringify(user));
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem(localStorageKey);
};
