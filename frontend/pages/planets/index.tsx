import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Page from "../../components/Layout/Page";

export default function index({ planet }) {
  return (
    <>
      <Page
        key={planet.id}
      >
        <Container
          fluid
          className="bg-light border-bottom border-light-secondary"
        >
          <Container>
            <Row>
              <Col lg={12}>
                <h1 className="mt-19 mb-4 d-block h4 text-uppercase">
                  Planets
                </h1>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="bg-white py-6">
          <Row>
            <Col lg={12}>
              {planet.map((prop) => (
                <Link
                  key={prop.id}
                  href={`/planets/${prop.slug}`}
                >
                  {prop.name} <br />
                </Link>
              ))}
            </Col>
          </Row>
        </Container>
      </Page>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URI}/planets`
  );
  const data = await res.json();
  return { props: { planet: data } };
}
