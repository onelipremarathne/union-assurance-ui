import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    dob: "",
    maritalStatus: "",
    spouseName: "",
    kids: [],
  });

  const updateUserData = (key, value) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};
