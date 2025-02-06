import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselSection, CarouselItemContent, TestimonialCard, TestimonialAuthor } from "./styles";

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  return (
    <div>
      <h2>Depoimentos de nossos clientes</h2>
      <CarouselSection>
        <Carousel>
          {groupedTestimonials.map((group, index) => (
            <Carousel.Item key={index}>
              <CarouselItemContent>
              {group.map((testimonial, idx) => (
                <TestimonialCard key={idx}>
                  <p>{testimonial.text}</p>
                  <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
                </TestimonialCard>
                ))}
              </CarouselItemContent>
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselSection>
    </div>
  );
};

export default TestimonialsSection;
