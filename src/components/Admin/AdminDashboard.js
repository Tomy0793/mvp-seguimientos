import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Panel de Administración</h2>
      <p>Desde aquí podés gestionar los closers, los objetivos y revisar el rendimiento general.</p>

      <Row className="mt-4" xs={1} md={2}>
        <Col className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>👤 Closers</Card.Title>
              <Card.Text>
                Alta de nuevos closers, modificación de objetivos individuales y seguimiento de progreso.
              </Card.Text>
              <Button onClick={() => navigate('/panel/admin/closers')} variant="primary">
                Ver lista de closers
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>🎯 Objetivo General</Card.Title>
              <Card.Text>
                Visualizá el objetivo mensual total y el avance acumulado del equipo.
              </Card.Text>
              <Button onClick={() => navigate('/panel/admin/objetivos')} variant="success">
                Ver objetivo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
