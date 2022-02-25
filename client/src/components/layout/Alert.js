import useAlerts from '../../hooks/alerts';

const Alert = () => {
  const { alerts } = useAlerts();

  return (
    <section className='alerts'>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            {alert.msg}
          </div>
        ))}
    </section>
  );
};

export default Alert;
