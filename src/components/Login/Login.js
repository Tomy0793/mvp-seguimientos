import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (rol) => {
    const usuario = {
      id: 'u001',
      nombre: rol === 'admin' ? 'Admin User' : 'Closer User',
      rol: rol
    };
  
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    // Redireccionar al panel correspondiente
    if (rol === 'admin') {
      navigate('/panel/admin');
    } else {
      navigate('/panel');
    }
  };
  

  return (
    <div style={{ padding: '2rem' }}>
      <Card style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem' }}>
        <h4>Simulación de Login</h4>
        <p>Elegí un rol para ingresar al panel:</p>
        <Button variant="primary" className="mb-2" onClick={() => handleLogin('closer')}>Ingresar como Closer</Button>
        <br />
        <Button variant="secondary" onClick={() => handleLogin('admin')}>Ingresar como Admin</Button>
      </Card>
    </div>
  );
};

export default Login;
