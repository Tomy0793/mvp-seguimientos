import React from 'react';
import { ListGroup } from 'react-bootstrap';

// Mock de reuniones próximas
const reuniones = [
  { id: 1, cliente: 'Maxipasta', fecha: '2025-06-05', hora: '11:00' },
  { id: 2, cliente: 'Estética Garín', fecha: '2025-06-07', hora: '15:30' }
];

const Reuniones = () => {
  return (
    <div>
      <h3>Próximas reuniones</h3>
      <ListGroup>
        {reuniones.map(r => (
          <ListGroup.Item key={r.id}>
            <strong>{r.cliente}</strong> — {r.fecha} a las {r.hora}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Reuniones;
