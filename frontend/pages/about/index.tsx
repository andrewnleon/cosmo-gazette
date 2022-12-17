import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container
        fluid
        className="bg-light-secondary border-bottom border-light"
      >
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="mt-19 mb-4 d-block h4 text-uppercase">
                Page Title
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="bg-white py-6">
        <Row>
          <Col lg={12}>
            <p>Description</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};