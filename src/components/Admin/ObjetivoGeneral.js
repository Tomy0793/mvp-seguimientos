import React, { useEffect, useState } from 'react';
import { Card, ProgressBar, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const ObjetivoGeneral = () => {
  const [groupObjective, setGroupObjective] = useState(null);
  const [achievedTotal, setAchievedTotal] = useState(null); // futura integración
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroupObjective = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('TOKEN ENVIADO:', token); // esto debe imprimirlo
  
        const res = await axios.get('http://localhost:4000/api/users/admin/group-objective', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        setGroupObjective(res.data.groupObjective);
        setAchievedTotal(15); // temporal
      } catch (err) {
        console.error('Error al obtener el objetivo general:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchGroupObjective();
  }, []);
  

  if (loading) return <p>Cargando objetivo...</p>;
  if (!groupObjective) return <p>No se encontró el objetivo.</p>;

  const porcentaje = Math.round((achievedTotal / groupObjective) * 100);

  return (
    <div>
      <h3>Objetivo General del Mes</h3>

      <Card className="mt-4">
        <Card.Body>
          <Row>
            <Col md={6}>
              <h5>Meta de ventas:</h5>
              <p><strong>{groupObjective} formularios</strong></p>
            </Col>
            <Col md={6}>
              <h5>Progreso actual:</h5>
              <p><strong>{achievedTotal} formularios</strong></p>
            </Col>
          </Row>

          <ProgressBar now={porcentaje} label={`${porcentaje}%`} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ObjetivoGeneral;
