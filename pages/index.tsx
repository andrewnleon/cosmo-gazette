import type { NextPage } from "next";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import Cover from "../components/Cover";
import PlanetCards from "../components/PlanetCards";

const Home: NextPage = () => {
  return (
    <>
      <main role="main">
        <Cover />
        <Container className="text-white bg-black position-relative z1 text-center pt-5 pb-5" fluid>
          <Container id="planets" style={{ height: "90px" }} />
          <Container>
            <Col className="mt-0 mb-3 pb-1">
              <h2 className="text-uppercase display-6 font-secondary">Planets</h2>
              <hr className="spacer mx-auto" />
            </Col>
            <PlanetCards />
          </Container>
        </Container>
        <Container className="text-white bg-black position-relative z1 text-center pt-5 pb-5" fluid>
          <Container>
            <Col className="mt-0 mb-3 pb-1">
              <h2 className="text-uppercase display-6 font-secondary">Galaxies</h2>
              <hr className="spacer mx-auto" />
            </Col>
            <Row xs={1} md={3} lg={12} className="g-4"></Row>
          </Container>
        </Container>
      </main>
      <footer className="bg-dark">
        <Container>
          <Row className="d-flex flex-column flex-sm-row pt-3 mb-0 pb-0 justify-content-center align-content-center text-center opacity-40">
            <p className="text-white mt-2">@CosmoGazette 2023</p>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Home;