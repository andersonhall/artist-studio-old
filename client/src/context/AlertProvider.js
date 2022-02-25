import { useState, useCallback, createContext } from 'react';

const AlertContext = createContext({
  alerts: [],
  addAlert: () => {},
  removeAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const removeAlert = id => setAlerts(alerts.filter(n => n.id !== id));
  const addAlert = (msg, type) => {
    const id = Math.floor(Math.random() * 5000);
    setAlerts(alerts => [...alerts, { id, msg, type }]);
    setTimeout(() => {
      removeAlert(id);
    }, 2000);
  };
  const context = {
    alerts,
    addAlert: useCallback((msg, type) => addAlert(msg, type), []),
  };

  return <AlertContext.Provider value={context}>{children}</AlertContext.Provider>;
};

export default AlertContext;
