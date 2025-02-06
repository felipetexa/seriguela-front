import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CustomCarouselProps, ImageDimensions } from "./types";
import {
  StyledCarousel,
  CarouselSection,
  CarouselItemContent,
  ImageTextWrapper,
  CarouselImageContainer,
  DynamicCarouselImage,
  DescriptionCard,
} from "./styles";

const CarouselComponent: React.FC<CustomCarouselProps> = ({ items }) => {
  const [dimensions, setDimensions] = useState<ImageDimensions[]>([]);

  useEffect(() => {
    const loadDimensions = async () => {
      const imgDimensions = await Promise.all(
        items.map(
          (item) =>
            new Promise<ImageDimensions>((resolve) => {
              const img = new Image();
              img.src = item.image;
              img.onload = () =>
                resolve({ width: img.width, height: img.height });
            })
        )
      );
      setDimensions(imgDimensions);
    };

    loadDimensions();
  }, [items]);

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 2) {
    groupedItems.push(items.slice(i, i + 2));
  }

  return (
    <CarouselSection>
      <StyledCarousel fade indicators={false}>
        {groupedItems.map((group, index) => (
          <Carousel.Item key={index}>
            <CarouselItemContent>
              {group.map((item, idx) => {
                const imageDimension = dimensions[index * 2 + idx] || {};
                return (
                  <ImageTextWrapper key={idx}>
                    <CarouselImageContainer>
                      <DynamicCarouselImage
                        src={item.image}
                        alt={`Slide ${index * 2 + idx + 1}`}
                        widthRatio={imageDimension.width}
                        heightRatio={imageDimension.height}
                      />
                    </CarouselImageContainer>
                    <DescriptionCard>
                      <p>{item.description}</p>
                    </DescriptionCard>
                  </ImageTextWrapper>
                );
              })}
            </CarouselItemContent>
          </Carousel.Item>
        ))}
      </StyledCarousel>
    </CarouselSection>
  );
};

export default CarouselComponent;
