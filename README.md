# 🧠 Seguimiento de Ventas - MVP

Este proyecto es una aplicación interna para gestión y seguimiento de ventas de closers, desarrollada con **React** y pensada para integrarse con **Google Calendar**, Auth0 y una base de datos relacional.

## 📦 Estructura

El proyecto se divide en dos partes principales:

### 1. `/form/:closerId` (Público)
- Formulario accesible desde una URL personalizada.
- En esta vista los clientes cargan datos (por ahora: nombre de empresa y a qué se dedica).
- El `closerId` se pasa por URL y permitirá asignar automáticamente los formularios.

### 2. `/panel` (Privado)
Panel con login simulado (en desarrollo para Auth0). Dependiendo del rol cargado (admin o closer), se accede a vistas diferentes:

#### 👤 Closer (`/panel`)
- **Objetivo personal**
- **Formularios recibidos**
- **Reuniones (mock de Google Calendar)**

#### 🛠️ Admin (`/panel/admin`)
- **Dashboard general**
- **Gestión de closers**
  - Listado actual
  - Agregar nuevo
  - Ver objetivos individuales
- **Objetivos generales**

## 🛠️ Tecnologías

- **Frontend**: React + React Router + React Bootstrap
- **Estado login**: Simulado vía `localStorage` (Auth0 planificado)
- **Estilos**: Bootstrap
- **Ruteo protegido** según rol

## 🚀 Cómo ejecutar

```bash
npm install
npm start


🔐 Simulación de login
Desde /login podés elegir ingresar como:

admin → acceso completo al panel de administración

closer → acceso al panel individual

Esto setea el usuario en localStorage.

📁 Estructura de carpetas

src/
├── App.js
├── index.js
├── App.css
│
├── components/
│   ├── Admin/
│   │   ├── AdminDashboard.js
│   │   ├── AdminLayout.js
│   │   ├── AddCloser.js
│   │   ├── CloserList.js
│   │   ├── ObjetivoGeneral.js
│   │   └── SideBarAdmin.js
│   │
│   ├── Closers/
│   │   ├── CloserLayout.js
│   │   ├── Objetivo.js
│   │   ├── Formularios.js
│   │   ├── Reuniones.js
│   │   └── SideBarCloser.js
│   │
│   ├── Common/
│   │   ├── NavBar/
│   │   │   └── NavBar.js
│   │   ├── Footer/
│   │   │   └── Footer.js
│   │   └── Logo/
│   │       └── Logo.js
│   │
│   ├── Form/
│   │   └── Form.js
│   │
│   └── Login/
│       └── Login.js


Cada carpeta agrupa los componentes relacionados por rol o funcionalidad:

Admin/ → vistas y componentes exclusivos del panel administrador.

Closers/ → vista del closer y sus secciones.

Common/ → elementos compartidos como Navbar, Footer, Logo.

Form/ → formulario público.

Login/ → componente de login simulado.

✅ Estado actual
 Rutas protegidas por rol

 Layouts básicos funcionales

 Mock de login con localStorage

 Simulación de panel admin/closer

 Navegación con sidebar persistente

 Integración real con Auth0

 Conexión a base de datos

 Guardado real de formularios

 Dashboard con métricas
