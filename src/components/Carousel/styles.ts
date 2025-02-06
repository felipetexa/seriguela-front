import styled from "styled-components";
import { Carousel } from "react-bootstrap";

export const StyledCarousel = styled(Carousel)`
  .carousel-control-prev {
    left: -8rem; 
  }

  .carousel-control-next {
    right: -8rem;
  }
`;

export const CarouselSection = styled.section`
  width: 100vw;
  padding: 4rem;
  background-color: #ed7101;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
`;

export const CarouselItemContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DynamicCarouselImage = styled.img<{
  widthRatio?: number;
  heightRatio?: number;
}>`
  width: ${({ widthRatio, heightRatio }) =>
    widthRatio && heightRatio ? `calc(${(widthRatio / heightRatio) * 60}vh)` : "100%"};
  height: 60vh;
  object-fit: cover;
`;

export const ImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 48%;
  
  
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const CarouselImageContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const DescriptionCard = styled.div`
  width: 100%;
  height: 17vh;
  text-align: justify;
  font-weight: 300;
  background-color: #ed7101;
  border: 1px solid #333;
  padding: 0.7rem;
  margin-top: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
