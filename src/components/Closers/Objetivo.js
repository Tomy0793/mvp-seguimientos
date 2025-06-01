import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

const Objetivo = () => {
  const objetivo = 10;
  const progreso = 7;
  const porcentaje = Math.round((progreso / objetivo) * 100);

  return (
    <div>
      <h3>Mi objetivo del mes</h3>
      <Card className="mt-4">
        <Card.Body>
          <p><strong>Meta:</strong> {objetivo} formularios</p>
          <p><strong>Logrados:</strong> {progreso}</p>
          <ProgressBar now={porcentaje} label={`${porcentaje}%`} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Objetivo;
