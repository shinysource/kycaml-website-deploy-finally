import { createContext, useContext, ReactChild, useState } from "react";
import useCurrentUser from "../hooks/useCurrentUser";

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  children: ReactChild;
}

interface State {
  user: User | undefined;
  loggedIn: boolean;
  logIn?: any;
}

const gameContextDefaultValues: State = {
  user: undefined,
  loggedIn: false,
  logIn: null,
};

const AuthContext = createContext<State>(gameContextDefaultValues);

export default function AuthProvider({ children }: AuthContextProps) {
  const { user, isLogged, logIn } = useCurrentUser();

  return (
    <AuthContext.Provider
      value={{
        user,
        loggedIn: isLogged,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth, AuthContext };
