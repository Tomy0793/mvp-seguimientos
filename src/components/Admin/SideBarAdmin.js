import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const SideBarAdmin = () => {
  const location = useLocation();

  const navItems = [
    { path: '/panel/admin', label: '📊 Dashboard' },
    { path: '/panel/admin/closers', label: '👤 Closers' },
    { path: '/panel/admin/objetivos', label: '🎯 Objetivos generales' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  };

  return (
    <div className="d-flex flex-column h-100 justify-content-between">
      <Nav className="flex-column">
        <h5 className="mb-3">Admin</h5>
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

export default SideBarAdmin;
