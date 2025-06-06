import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Row, Col } from 'react-bootstrap';

const CloserList = () => {
  const [closers, setClosers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://localhost:4000/api/users/admin/closers-list', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setClosers(res.data))
      .catch((err) => console.error('Error al cargar closers:', err));
  }, []);

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <h3>Closers registrados</h3>
        </Col>
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
            <th>Logrado</th>
            <th>% Cumplimiento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {closers.map((closer) => (
            <tr key={closer.id}>
              <td>{closer.name}</td>
              <td>{closer.email}</td>
              <td>{closer.objective}</td>
              <td>{closer.achieved}</td>
              <td>{closer.percentComplete}%</td>
              <td>
                <Button size="sm" variant="outline-primary">
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CloserList;
