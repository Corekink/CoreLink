import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role?: string;
  avatarUrl?: string;
}

export interface AuthError {
  type: 'user_not_registered' | 'auth_required' | 'unknown';
  message?: string;
}

interface AuthContextType {
  user: User | null;
  isLoadingAuth: boolean;
  isLoadingPublicSettings: boolean;
  authError: AuthError | null;
  navigateToLogin: () => void;
  login: (email: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('corelink_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });
  
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState<boolean>(true);
  const [authError, setAuthError] = useState<AuthError | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingAuth(false);
      setIsLoadingPublicSettings(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const navigateToLogin = () => {
    // Custom redirect or state change if needed
    console.log('Navigating to login');
  };

  const login = async (email: string, name = 'Client Partner') => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      email,
      name,
      phone: '+971 50 123 4567',
      role: 'Client'
    };
    setUser(newUser);
    localStorage.setItem('corelink_user', JSON.stringify(newUser));
    setAuthError(null);
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('corelink_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        navigateToLogin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
