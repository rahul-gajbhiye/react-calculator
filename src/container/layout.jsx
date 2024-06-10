import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { faPercentage } from '@fortawesome/free-solid-svg-icons/faPercentage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Layout = () => {
  const buttons = [
    {
      value: "+",
      type: "control",
    },
    {
      value: "-",
      type: "control",
    },
    {
      value: "/",
      type: "control",
    },
    {
      value: "*",
      type: "control",
    },
    {
      value: <FontAwesomeIcon icon={faPercentage} />,
      type: "number",
    },
  ];
  return (
    <Container>
      <Row>
        <Col xs={12} sm={{ span: 4, offset: 3 }} md={{ span: 4, offset: 4 }}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Calculator</Card.Title>
              <Form.Control type="text" placeholder="000" />

              <Row>
                {buttons.map((data, index) => {
                  return (
                    <Col xs={3} >
                      <div className="d-grid">
                      <Button variant={data.type == "control" ? "primary" : "secondary"}>{data.value}</Button>
                      </div>
                      
                    </Col>
                  );
                })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
