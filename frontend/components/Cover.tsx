import React, { useRef, useState } from "react";
import { Col, Container, Row, Button, Tooltip, OverlayTrigger, } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { zoomInDown } from "react-animations";
import { Parallax } from "react-scroll-parallax";
import { FaLaptopCode } from "react-icons/fa";
import { SiReact, SiCsharp, } from "react-icons/si";
import { AiOutlineConsoleSql, } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";

const zoomAnimation = keyframes`${zoomInDown}`;
const ZoomIn = styled.div`
  animation: 1.2s ${zoomAnimation};
`;

interface StackIcons {
  id: number,
  icon: JSX.Element,
  tooltip: string,
}
export default function Cover() {
  const [showIcons, setShowIcons] = useState(true);
  const targetIcons = useRef(null);
  const stackIcons:StackIcons[] = [
    { id: 1, icon: <SiCsharp className="fs-2" />, tooltip: "C# .Net" },
    { id: 2, icon: <SiReact className="fs-2" />, tooltip: "ReactJs" },
    { id: 3, icon: <AiOutlineConsoleSql className="fs-2" />, tooltip: "SQL Server" },
    { id: 4, icon: <BsWordpress className="fs-2" />, tooltip: "Wordpress" },
  ];
  return (
    <Container
      fluid
      id="cover-container"
      className="d-flex flex-column p-0"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_KIT_URI}/tr:w-1920,h-1080,fo-center,ar-16-9/drewcity.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        height: "100vh"
      }}
    >
      <Container className="d-flex flex-column h-100">
        <Row className="masthead mb-auto">
          <Col className="inner"></Col>
        </Row>
        <Row id="cover-banner" className="inner cover">
          <Parallax speed={-8} easing={"easeIn"}>
            <ZoomIn>
              <Col
                sm={12}
                md={8}
                lg={4}
                xl={4}
                className="mx-auto bg bg-primary bg-opacity-95 rounded rounded-3 py-4 px-3 text-white text-center"
              >
                <h1 className="font-secondary fw-bold">Andrew Leonberger</h1>
                <hr className="spacer mx-5 col-2 mx-auto my-2 text-opacity-90 text-white" />
                <p className="lead text-light">
                  Specializing in UI/UX/DX development
                  <br />
                  for modern web applications
                </p>
                <Button 
                  size="lg"
                  variant="outline-secondary bg-primary"
                  className="text-uppercase p-0 bg-opacity-25"
                  href="#recentwork"
                  title="Discover Andrew's recent work"
                >
                  <span>
                    Discover
                    <FaLaptopCode className="mx-2 mt-n1 btn-icon" />
                  </span>
                  <Col className="wave"></Col>
                </Button>
                <Row className="g-2 mt-3 text-secondary opacity-50 col-8 mx-auto">
                  {showIcons && (
                    <>
                      {stackIcons.map((prop) => {
                        return (
                          <OverlayTrigger
                            key={prop.id}
                            placement="bottom"
                            delay={600}
                            overlay={
                              <Tooltip
                                id={`tooltip-${prop.id}`}
                                className="position-absolute"
                              >
                                {prop.tooltip}
                              </Tooltip>
                            }
                          >
                            <Col
                              key={prop.id}
                              className="text-center"
                              ref={targetIcons}
                              onMouseOut={() => setShowIcons(false)}
                              onMouseOver={() => setShowIcons(true)}
                            >
                              {prop.icon}
                            </Col>
                          </OverlayTrigger>
                        );
                      })}
                    </>
                  )}
                </Row>
              </Col>
            </ZoomIn>
          </Parallax>
        </Row>
        <Row className="mastfoot mt-auto">
          <Col className="inner"></Col>
        </Row>
      </Container>
      <svg
        viewBox="0 0 1000 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#003366"
          opacity="0.10"
          d="M0 14C0 14 88.64 17.48 300 50C560 90 814 77 1003 40L1015 68L1018 104H0V14Z"
        ></path>
        <path
          fill="#0099FF"
          opacity="0.3"
          d="M0 45C0 45 271 90.13 500 77C657 68 830 30 1015 14V100H0V45Z"
        ></path>
        <path
          fill="white"
          d="M0 58C0 58 188.29 90 508 90C798 90 1002 55 1002 55V100H0V58Z"
        ></path>
      </svg>
    </Container>
  );
}
