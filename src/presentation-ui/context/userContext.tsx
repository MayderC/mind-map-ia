'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';
import { LoginProps, UserContextType } from '../interfaces';

export const UserContext = createContext<UserContextType | null>(null);
export const LOCAL_STORAGE_KEY = 'user';

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LoginProps | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
    if (user) setUser(user);
  }, []);

  const login = (user: LoginProps) => {
    setUser(user);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
