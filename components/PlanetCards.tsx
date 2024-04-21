import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Col, ListGroup, Row, Spinner } from "react-bootstrap";
import FetchApi from "../hooks/FetchApi";
import { Planet } from "../typings";

export default function PlanetCards() {
  const token = `${process.env.NEXT_TOKEN}`;
  const { data, error } = FetchApi("/api/planets", token);
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;

  const RenderCard = (planet: Planet) => {
    return (
      <Col>
        <Card
          key={planet.id}
          className="border-1 border-primary bg-primary bg-opacity-5 p-3"
        >
          <Card.Header className="h3 mb-3">{planet.name}</Card.Header>
          <div className="text-start">
            <Image
              alt={planet.description}
              quality={100}
              src={planet.thumbnail}
              width={200}
              height={200}
              style={{ width: "100%", height: "380px" }}
            />
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-transparent text-white">
                Diameter {planet.diameter}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                mass {planet.mass}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                atmosphere {planet.atmosphere}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                {planet.moons == "0" ? "" : "moons " + planet.moons + ""}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                rings {planet.rings}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                distance_from_sun {planet.distance_from_sun}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                distance_from_earth {planet.distance_from_earth}
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-white">
                {planet.description}
              </ListGroup.Item>
            </ListGroup>
            <Link
              href={"/planets/" + planet.slug}
              className="text-uppercase bg-opacity-25 btn btn-secondary"
            >
              Learn More
            </Link>
          </div>
        </Card>
      </Col>
    );
  };

  const planetList = data.map((planet: Planet) => {
    switch (planet.name) {
      case "Sun":
      case "Mercury":
      case "Venus":
      case "Earth":
      case "Moon":
      case "Mars":
      case "Jupiter":
      case "Saturn":
      case "Uranus":
      case "Neptune":
      case "Pluto":
        return RenderCard(planet);
      default:
        return planet.name;
    }
  });

  return (
    <Row xs={1} md={3} className="g-4">
      {planetList}
    </Row>
  );
}
