import React from 'react';
import Sidebar from './SideBar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '2rem' }}>
        <h2>Panel del Closer</h2>
        <p>Acá vas a poder ver tu objetivo, formularios cargados y tus reuniones.</p>
      </div>
    </div>
  );
};

export default Dashboard;
