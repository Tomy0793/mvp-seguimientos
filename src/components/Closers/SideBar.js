import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/panel/objetivo', label: '📊 Objetivo' },
    { path: '/panel/formularios', label: '📋 Formularios' },
    { path: '/panel/reuniones', label: '📅 Reuniones' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  };

  return (
    <div className="d-flex flex-column h-100 justify-content-between">
      <Nav className="flex-column">
        <h5 className="mb-3">Mi Panel</h5>
        {navItems.map((item) => (
          <Nav.Link
            key={item.path}
            as={Link}
            to={item.path}
            active={location.pathname === item.path}
          >
            {item.label}
          </Nav.Link>
        ))}
      </Nav>

      <div className="mt-4">
        <Button variant="outline-danger" size="sm" onClick={handleLogout}>
          Salir
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
