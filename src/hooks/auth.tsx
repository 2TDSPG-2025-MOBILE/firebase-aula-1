import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
  login: (userData: User) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const storedUser = await AsyncStorage.getItem('@App:user');
      if (storedUser) setUser(JSON.parse(storedUser));
      setLoading(false);
    }
    loadUser();
  }, []);

  const login = useCallback(async (userData: User) => {
    setUser(userData);
    await AsyncStorage.setItem('@App:user', JSON.stringify(userData));
  }, []);

  const logout = useCallback(async () => {
    setUser(null);
    await AsyncStorage.removeItem('@App:user');
  }, []);

  const updateUser = useCallback(async (userData: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    await AsyncStorage.setItem('@App:user', JSON.stringify(updatedUser));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, isLoggedIn: !!user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
