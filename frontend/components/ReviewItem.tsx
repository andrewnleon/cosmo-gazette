import React from "react";
import { Container } from "react-bootstrap";

interface ReviewItem {
  quote: string;
  author: string;
  company: string;
  jobtitle: string;
}

export default function ReviewItems(review: ReviewItem) {
  return (
    <Container className="bg-primary text-white pt-4 pb-0 rounded h-100 d-flex">
      <blockquote className="blockquote fst-italic px-4 align-self-center">
        <p className="border-start border-5 border-secondary border-opacity-25 text-start px-3">
          {review.quote}
        </p>
        <footer className="mt-2 opacity-50 font-weight">
          <p className="text-start">
            ~ {review.author}, {review.jobtitle} @
            <cite title={review.company}>{review.company}</cite>
          </p>
        </footer>
      </blockquote>
    </Container>
  );
}
