import './App.css';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Common
import NavBar from './components/Common/NavBar/NavBar';
import Footer from './components/Common/Footer/Footer';

// Público
import Form from './components/Form/Form';

// Closers
import CloserLayout from './components/Closers/CloserLayout';
import Objetivo from './components/Closers/Objetivo';
import Formularios from './components/Closers/Formularios';
import Reuniones from './components/Closers/Reuniones';

// Admin
import AdminLayout from './components/Admin/AdminLayout';
import AdminDashboard from './components/Admin/AdminDashboard';
import CloserList from './components/Admin/CloserList';
import AddCloser from './components/Admin/AddCloser';
import ObjetivoGeneral from './components/Admin/ObjetivoGeneral';

// Login
import Login from './components/Login/Login';

function AppWrapper() {
  const location = useLocation();
  const isFormRoute = location.pathname.startsWith('/form');

  // ✅ Leer usuario directo de localStorage (no usar useState)
  const stored = localStorage.getItem('usuario');
  const loggedUser = stored ? JSON.parse(stored) : null;

  return (
    <>
      {!isFormRoute && <NavBar />}

      <Routes>
        {/* 🟩 Formulario público */}
        <Route path="/form/:closerId" element={<Form />} />

        {/* 🟦 Login */}
        <Route path="/login" element={<Login />} />

        {/* 🟧 Panel de Closer (si está logueado y es Closer) */}
        {loggedUser?.rol === 'closer' && (
          <Route path="/panel" element={<CloserLayout />}>
            <Route index element={<Objetivo />} />
            <Route path="objetivo" element={<Objetivo />} />
            <Route path="formularios" element={<Formularios />} />
            <Route path="reuniones" element={<Reuniones />} />
          </Route>
        )}

        {/* 🟥 Panel de Admin (si está logueado y es Admin) */}
        {loggedUser?.rol === 'admin' && (
          <Route path="/panel/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="closers" element={<CloserList />} />
            <Route path="add" element={<AddCloser />} />
            <Route path="objetivos" element={<ObjetivoGeneral />} />
          </Route>
        )}

        {/* ❌ Redirección para no logueados */}
        {!loggedUser && (
          <Route path="/panel/*" element={<Navigate to="/login" />} />
        )}

        {/* 🔄 Catch all */}
        <Route path="*" element={<Navigate to={loggedUser ? '/panel' : '/login'} />} />
      </Routes>

      {!isFormRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
