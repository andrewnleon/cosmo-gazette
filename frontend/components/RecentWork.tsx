import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { SiCsharp, SiGulp } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { BsWordpress } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { Gi3DGlasses } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import RecentWorkCard from "./RecentWorkCard";

type FetchedData = {
  id: React.Key;
  name: string;
  frameworks: JSX.Element;
  thumbnail: string;
  delay: number;
}
function RecentWork() {
  const projects: FetchedData[] = [
    {
      id: 1,
      name: "Stanley Martin Homes",
      frameworks: (
        <>
          <SiCsharp className="fs-2" />
          <DiCss3 className="fs-2" />
          <SiGulp className="fs-2" />
          <VscAzure className="fs-2" />
        </>
      ),
      thumbnail: "casestudies/stanleymartin/tr:w-416,h-260,fo-center/smh_thumbnail.jpg",
      delay: 10,
    },
    {
      id: 2,
      name: "Liquidity Services",
      frameworks: (
        <>
          <SiCsharp className="fs-2" />
          <DiCss3 className="fs-2" />
          <VscAzure className="fs-2" />
        </>
      ),
      thumbnail: "casestudies/liquidity-services/tr:w-415,h-259,fo-center/lsi_thumbnail.jpg",
      delay: 20,
    },
    {
      id: 3,
      name: "Fantasy Factory Performance",
      frameworks: (
        <>
          <SiCsharp className="fs-2" />
          <BsWordpress className="fs-2" />
        </>
      ),
      thumbnail: "casestudies/fantasy-factory/tr:w-415,h-259,fo-center/ffp_thumbnail.jpg",
      delay: 30,
    },
  ];
  return (
    <>
      <Col id="recentwork" className="scroll_anchor bg-white">
        &nbsp;
      </Col>    
      <section className="pb-5 text-primary bg-white">
        <Container className="text-center">
          <FaLaptopCode size={56} className="mb-2" />
          <Col className="mt-0 mb-3 pb-1">
            <h2 className="text-uppercase display-6 font-secondary">
              Recent Work
            </h2>
            <hr className="spacer mx-auto" />
          </Col>
          <Row xs={1} md={3} lg={12} className="g-4">
            {projects.map((prop) => {
              return (
                <Col key={prop.id}>
                  <Fade direction="up" triggerOnce={true} delay={prop.delay}>
                    <RecentWorkCard
                      id={prop.id}
                      name={prop.name}
                      frameworks={prop.frameworks}
                      thumbnail={prop.thumbnail}
                    />
                  </Fade>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Fade triggerOnce={true} direction="up" delay={430}>
              <Col className="mt-4 pb-15">
                <Button
                  size="lg"
                  variant="outline-secondary bg-primary"
                  className="text-uppercase p-0 bg-opacity-100"
                  href="#recentwork"
                >
                  <span>
                    View All
                    <Gi3DGlasses size={27} className="mx-2 mt-n2 btn-icon" />
                  </span>
                </Button>
              </Col>
            </Fade>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default RecentWork;
