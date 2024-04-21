import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { zoomInDown } from "react-animations";
import { Parallax } from "react-scroll-parallax";
import { IoTelescopeSharp } from "react-icons/io5";
import Moon from "./Planets/Moon";
import SpaceStars from "./Planets/Stars";
import Earth from "./Planets/Earth";

const ZoomAnimation = keyframes`${zoomInDown}`;
const ZoomIn = styled.div`
  animation: 1.2s ${ZoomAnimation};
`;

const SpaceWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;
const CanvasWrap = styled.div`
  width: 100%;
  height: 520px;
  top: 33vh;
  z-index: 1;
  position: relative;
  background-color: transparent;
`;

const IntroWrap = styled.div`
  width: 100%;
  top: 28vh;
  margin-top: -140px;
  margin-bottom:40px;
  z-index: 1000;
  position: relative;
  background-color: transparent;
`;

const WavesWrap = styled.div`
  width: 100%;
  top: 30vh;
  z-index: 1000;
  background-color: transparent;
`;
export default function Cover() {
  // Declare a state variable to track the current scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  // Use the useEffect hook to update the scroll position whenever the window scrolls
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Use the scroll position to animate the component based on the scroll position
  const animationStyle = {
    transform: `translateY(${scrollPosition}px)`,
  };

  return (
    <>
      <Container
        fluid
        id="cover-container"
        className="d-flex flex-column p-0"
        style={{
          // backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_KIT_URI}/tr:w-1920,h-1080,fo-center,ar-16-9/drewcity)`,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          height: "64vh",
          zIndex: 0,
        }}
      >
        <SpaceWrap>
          <SpaceStars />
        </SpaceWrap>
        <Container className="d-flex flex-column p-0">
          <Row className="masthead mb-auto">
            <Col className="inner"></Col>
          </Row>
          <Row id="cover-banner" className="inner cover g-0">
            <Parallax speed={-8} easing={"easeIn"}>
              <IntroWrap>
                <ZoomIn>
                  <Col className="m-auto" lg={4}>
                    <Card
                      border="secondary"
                      className="bg-primary bg-opacity-95 rounded rounded-3 py-4 px-3 mx-4 text-white text-center"
                    >
                      <Card.Body>
                        <h1 className="font-secondary fw-bold">
                          Cosmo Gazette
                        </h1>
                        <hr className="spacer mx-5 col-2 mx-auto my-2" />
                        <p className="lead text-light">
                          A Guide To Our Planets & Galaxies
                        </p>
                        {/* @ts-ignore */}
                        <Button
                          size="lg"
                          variant="outline-primary"
                          className="text-uppercase p-0 bg-opacity-25"
                          href="#planets"
                          title="Tour our Solar System"
                        >
                          <span>
                            Explore
                            <IoTelescopeSharp className="mx-2 mt-n1 btn-icon" />
                          </span>
                          <Col className="wave"></Col>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </ZoomIn>
              </IntroWrap>
            </Parallax>
          </Row>
          <Row className="mastfoot mt-auto g-0">
            <Col className="inner">
            <CanvasWrap className="p-0 m-auto align-self-center z1 position-relative">
              <Earth />
            </CanvasWrap>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <WavesWrap>
        <svg
          viewBox="0 0 1000 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#3E236C"
            opacity="0.10"
            d="M0 14C0 14 88.64 17.48 300 50C560 90 814 77 1003 40L1015 68L1018 104H0V14Z"
          ></path>
          <path
            fill="#7F42B3"
            opacity="0.3"
            d="M0 45C0 45 271 90.13 500 77C657 68 830 30 1015 14V100H0V45Z"
          ></path>
          <path
            fill="black"
            d="M0 58C0 58 188.29 90 508 90C798 90 1002 55 1002 55V100H0V58Z"
          ></path>
        </svg>
      </WavesWrap>
    </>
  );
}
