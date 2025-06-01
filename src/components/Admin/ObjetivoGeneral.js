import React from 'react';
import { Card, ProgressBar, Row, Col } from 'react-bootstrap';

// Mock de objetivos general y acumulado
const objetivoMensual = 25; // Total deseado por todos los closers
const progresoAcumulado = 15; // Total sumado

const ObjetivoGeneral = () => {
  const porcentaje = Math.round((progresoAcumulado / objetivoMensual) * 100);

  return (
    <div>
      <h3>Objetivo General del Mes</h3>

      <Card className="mt-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <h5>Meta de ventas:</h5>
              <p><strong>{objetivoMensual} formularios</strong></p>
            </Col>
            <Col md={6}>
              <h5>Progreso actual:</h5>
              <p><strong>{progresoAcumulado} formularios</strong></p>
            </Col>
          </Row>

          <ProgressBar now={porcentaje} label={`${porcentaje}%`} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ObjetivoGeneral;
