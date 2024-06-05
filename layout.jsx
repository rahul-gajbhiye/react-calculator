import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100 h-100 d-flex justify-content-center align-items-center">
        <Col sm={12} md={6} lg={4}>
          <div className="text-center border p-4">
            <p>This is a centered container.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;

