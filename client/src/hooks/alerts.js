import { useContext } from 'react';
import AlertContext from '../context/AlertProvider';

const useAlerts = () => {
  const { alerts, addAlert, removeAlert } = useContext(AlertContext);
  return { alerts, addAlert, removeAlert };
};

export default useAlerts;
