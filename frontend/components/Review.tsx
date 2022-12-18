import React from "react";
import useSWR from "swr";
import { Col, Container, Row, Spinner, Carousel } from "react-bootstrap";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";
import FeedbackCard from "./ReviewItem";
import EmployerLogos from "./EmployerLogos";
import { reviewData } from "../typings";

export default function Review() {
  const getReviews = `${process.env.NEXT_PUBLIC_STRAPI_API_URI}/reviews?populate=company`;
  const fetchReviews = (url: RequestInfo | URL) =>
    fetch(url).then((r) => r.json());
  const {
    data: reviews,
    error: errorReview,
    isValidating: validateReviews,
  } = useSWR(getReviews, fetchReviews);

  if (validateReviews)
    return (
      <Col className="text-center">
        <Spinner variant="primary" animation="grow" />
      </Col>
    );
  if (errorReview) return <Col>Failed to load</Col>;

  return (
    <section className="bg-light-secondary pb-0 pt-15 text-center text-primary border-top border-light">
      <Container className="p-0">
        <Slide triggerOnce={true} direction="up">
          <BsChatSquareQuoteFill size={56} className="mb-2" />
          <Col lg={12}>
            <h2 className="text-uppercase display-6 font-secondary">
              Testimonials
            </h2>
            <hr className="spacer mx-auto mb-5" />
          </Col>
        </Slide>
        <Container className="p-0">
          <Slide triggerOnce={true} direction="up">
            <Col sm={12} md={12} lg={12} className="mx-auto">
              <Carousel
                variant="dark"
                pause="hover"
                touch={true}
                wrap={true}
                interval={null}
                indicators={true}
              >
                {reviews ? (
                  reviews.data.map((review: reviewData) => (
                    <Carousel.Item className="feedback-item" key={review.id}>
                      <Carousel.Caption className="col">
                        <FeedbackCard
                          key={review.id}
                          quote={review.attributes.quote}
                          author={review.attributes.author}
                          company={
                            review.attributes.company.data.attributes.title
                          }
                          jobtitle={review.attributes.jobtitle}
                        />
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))
                ) : (
                  <>{!reviews}</>
                )}
                {errorReview}
              </Carousel>
            </Col>
          </Slide>
        </Container>
      </Container>
      <Container fluid>
        <Row
          sm={12}
          className="row-cols-6 opacity-40 mt-1 mb-14 justify-content-center"
        >
          {/* {employerLogos ? (
            employerLogos.data.map((logo: Data) => (
              <EmployerLogos
                id={logo.id}
                key={logo.id}
                company={logo.attributes.company}
                thumbnail={logo.attributes.logo.data.attributes.url}
                alternativeText={logo.attributes.logo.data.attributes.alternativeText}
                transition={logo.attributes.transition}
              />
            ))
          ) : (
            <>{!employerLogos}</>
          )}
          {errorLogo} */}
        </Row>
      </Container>
    </section>
  );
}
