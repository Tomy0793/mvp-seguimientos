import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://ventas360-ventas360.p89nps.easypanel.host/api/users/login', {
        email,
        password,
      });

      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(user));

      if (user.role === 'ADMIN') {
        navigate('/panel/admin');
      } else if (user.role === 'CLOSER') {
        navigate('/panel');
      } else {
        setErrorMsg('Rol no reconocido');
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Error al conectar con el servidor';
      setErrorMsg(msg);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Contraseña</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: 8 }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 14,
              }}
            >
              {showPassword ? 'Ocultar' : 'Ver'}
            </button>
          </div>
        </div>

        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

        <button type="submit" style={{ padding: '10px 20px' }}>Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
