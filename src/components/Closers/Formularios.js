import React from 'react';
import { Table } from 'react-bootstrap';

// Mock de formularios recibidos
const formularios = [
  { id: 1, empresa: 'Maxipasta', rubro: 'Gastronomía', fecha: '2025-05-20' },
  { id: 2, empresa: 'Estética Garín', rubro: 'Salud y Belleza', fecha: '2025-05-22' }
];

const Formularios = () => {
  return (
    <div>
      <h3>Formularios recibidos</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre de la empresa</th>
            <th>Rubro</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {formularios.map(form => (
            <tr key={form.id}>
              <td>{form.empresa}</td>
              <td>{form.rubro}</td>
              <td>{form.fecha}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Formularios;
