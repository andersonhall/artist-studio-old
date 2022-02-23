import { useContext } from 'react';

const Dashboard = ({ context }) => {
  const auth = useContext(context);
  console.log(auth);
  return <h1>{`${auth.isAuthenticated}`}</h1>;
};

export default Dashboard;
