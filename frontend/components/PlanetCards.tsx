import React from "react";
import { Col, Spinner } from "react-bootstrap";
import styled from "styled-components";
import FetchApi from "../hooks/FetchApi";
import { Planet } from "../typings";
import Earth from "./Planets/Earth";
import Jupiter from "./Planets/Jupiter";
import Mars from "./Planets/Mars";
import Mercury from "./Planets/Mercury";
import Moon from "./Planets/Moon";
import Neptune from "./Planets/Neptune";
import Saturn from "./Planets/Saturn";
import Sun from "./Planets/Sun";
import Uranus from "./Planets/Uranus";
import Venus from "./Planets/Venus";
const CanvasWrap = styled.div`
  width: 300px;
  height: 300px;
  background-color: transparent;
`;
export default function PlanetCards() {
  const token = `${process.env.NEXT_TOKEN}`;
  const { data, error } = FetchApi("/api/planets", token);
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
  return (
    <>
      {data ? (
        data.map((planet: Planet) => (
          <Col key={planet.id}>
            {planet.name === "Sun" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Sun />
                </CanvasWrap>
              </>
            ) : planet.name === "Mercury" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Mercury />
                </CanvasWrap>
              </>
            ) : planet.name === "Venus" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Venus />
                </CanvasWrap>
              </>
            ) : planet.name === "Earth" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Earth />
                </CanvasWrap>
              </>
            ) : planet.name === "Moon" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Moon />
                </CanvasWrap>
              </>              
            ) : planet.name === "Mars" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Mars />
                </CanvasWrap>
              </>
            ) : planet.name === "Jupiter" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Jupiter />
                </CanvasWrap>
              </>
            ) : planet.name === "Saturn" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Saturn />
                </CanvasWrap>
              </>
            ) : planet.name === "Uranus" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Uranus />
                </CanvasWrap>
              </>
            ) : planet.name === "Neptune" ? (
              <>
                {planet.name}
                <CanvasWrap>
                  <Neptune />
                </CanvasWrap>
              </>
            ) : (
              planet.name
            )}
          </Col>
        ))
      ) : (
        <>{!data}</>
      )}
      {error}
    </>
  );
}