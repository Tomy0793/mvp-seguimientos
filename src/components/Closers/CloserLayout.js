import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

const CloserLayout = () => {
  return (
    <Container fluid>
      <Row>
      <Col xs={12} md={3} lg={2} className="sidebar-container">
  <Sidebar />
</Col>
        <Col xs={12} md={9} lg={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default CloserLayout;
