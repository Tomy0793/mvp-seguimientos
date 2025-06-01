import React from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';

// Mock temporal de closers
const closers = [
  {
    id: 'c001',
    nombre: 'Amparo',
    email: 'amparo@ninnotech.com',
    objetivo: 10,
    progreso: 6,
  },
  {
    id: 'c002',
    nombre: 'Tomas',
    email: 'tomas@ninnotech.com',
    objetivo: 8,
    progreso: 4,
  }
];

const CloserList = () => {
  return (
    <div>
      <Row className="mb-3">
        <Col><h3>Closers registrados</h3></Col>
        <Col className="text-end">
          <Button variant="success" size="sm">
            ➕ Agregar closer
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Objetivo mensual</th>
            <th>Progreso</th>
            <th>% Cumplimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {closers.map((closer) => {
            const porcentaje = closer.objetivo
              ? Math.round((closer.progreso / closer.objetivo) * 100)
              : 0;

            return (
              <tr key={closer.id}>
                <td>{closer.nombre}</td>
                <td>{closer.email}</td>
                <td>{closer.objetivo}</td>
                <td>{closer.progreso}</td>
                <td>{porcentaje}%</td>
                <td>
                  <Button size="sm" variant="outline-primary">
                    Editar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default CloserList;
