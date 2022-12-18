import React from "react";
import { Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

interface Data {
  id: string;
  company: string;
  thumbnail: string;
  alternativeText: string;
  transition: number;
}

export default function FeedbackLogo(employerLogos: Data) {
  return (
    <Col
      lg={1}
      id={employerLogos.id}
      key={employerLogos.id}
      className="align-self-center"
    >
      <Fade triggerOnce={true} delay={employerLogos.transition} direction="up">
        <Image
          key={employerLogos.id}
          alt={employerLogos.alternativeText}
          src={employerLogos.thumbnail}
          width="200"
          height="50"
          className="img-fluid"
        />
      </Fade>
    </Col>
  );
}
