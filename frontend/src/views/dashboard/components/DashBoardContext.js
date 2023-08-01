import React, { useState, createContext, useContext } from 'react';

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [updateRecentTransactions, setUpdateRecentTransactions] = useState(false);

  return (
    <DashboardContext.Provider value={{ updateRecentTransactions, setUpdateRecentTransactions }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Crie um hook personalizado para usar o contexto
const useDashboardContext = () => useContext(DashboardContext);

export { DashboardContext, DashboardProvider, useDashboardContext };
