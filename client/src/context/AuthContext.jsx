import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  // const [user, setUser] = useState(
  //   JSON.parse(sessionStorage.getItem("user")) || null
  // );

  const getSafeUser = () => {
    try {
      const userString = sessionStorage.getItem("user");
      return userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error("error parsing user from sessionstorage:", error);
      sessionStorage.removeItem("user");
      return null;
    }
  };

  const [user, setUser] = useState(getSafeUser());
  const [isLogin, setIsLogin] = useState(!!getSafeUser());
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const storedUser = getSafeUser();

    if(storedUser){
      setUser(storedUser);
      setIsLogin(true);
      setIsAdmin(storedUser.role === "Admin");
      setIsRecruiter(storedUser.role === "Recruiter");
      setIsUser(storedUser.role === "User");
    }else{
      setUser(null);
      setIsLogin(false);
      setIsAdmin(false);
      setIsRecruiter(false);
      setIsUser(false);
    }
  }, []);


  useEffect(()=>{
    if(user) {
      try {
        sessionStorage.setItem("user", JSON.stringify(user));
        setIsLogin(true);
        setIsAdmin(user.role === "Admin");
        setIsRecruiter(user.role === "Recruiter");
        setIsUser(user.role === "User");
      } catch (error) {
         console.error("Error saving user to sessionStorage:", error);
      }
    }else{
      sessionStorage.removeItem("user");
      setIsLogin(false);
      setIsAdmin(false);
      setIsRecruiter(false);
      setIsUser(false);
    }
  }, [user]);

  const value = {
    user,
    setUser,
    isLogin,
    isAdmin,
    isRecruiter,
    isUser,
    setIsLogin,
    setIsAdmin,
    setIsRecruiter,
    setIsUser,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
