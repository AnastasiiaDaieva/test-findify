import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [appliedFilters, setAppliedFilters] = useState([]);

  return (
    <UserContext.Provider
      value={{
        appliedFilters,
        setAppliedFilters,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
