import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomCarouselProps } from "./types";
import { CarouselSection, CarouselItemContent, CarouselImageContainer, CarouselImage, DescriptionCard } from "./styles";

const CarouselComponent: React.FC<CustomCarouselProps> = ({ items }) => {
  return (
    <CarouselSection>
      <Carousel>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <CarouselItemContent>
              <CarouselImageContainer>
                <CarouselImage src={item.image} alt={`Slide ${index + 1}`} />
              </CarouselImageContainer>
              <DescriptionCard>
                <p>{item.description}</p>
              </DescriptionCard>
            </CarouselItemContent>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselSection>
  );
};

export default CarouselComponent;