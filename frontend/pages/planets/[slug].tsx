import { Col, Container, Row } from "react-bootstrap";
import Page from "../../components/Layout/Page";

const Planets = ({ planet }) => {
  return (
    <>
    <Page key={planet.id}>
      <Container
        fluid
        className="bg-light border-bottom border-light-secondary"
      >
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="mt-19 mb-4 d-block h4 text-uppercase">
              {planet.name}
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="bg-white py-6">
        <Row>
          <Col lg={12}>
          <b>General:</b>
            <ul>
              <li>id: {planet.id}</li>
              <li>name: {planet.name}</li>
              <li>slug: {planet.slug}</li>
              <li>diameter: {planet.diameter}</li>
              <li>mass: {planet.mass}</li>
              <li>distanceFromSun: {planet.distance_from_sun}</li>
              <li>atmosphere: {planet.atmosphere}</li>
              <li>name: {planet.moons}</li>
              <li>name: {planet.rings}</li>
              <li>name: {planet.description}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Page>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/planets/${slug}`);
  const data = await res.json();
  if (!data) {
    return {
      // redirect: {
      //   destination: '/',
      //   permanent: false,
      //   // statusCode: 301
      // },
      notFound: true,
    }
  }
  return {
    props: { planet: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/planets`);
  const data = await res.json();
  const paths = data.map((planet: { slug: string; }) => {
    return {
      params: {
        slug: planet.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Planets;