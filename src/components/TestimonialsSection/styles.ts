import styled from "styled-components";

export const CarouselSection = styled.section`
  width: 100vw;
  padding: 4rem 0;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5rem;
`;

export const TestimonialCard = styled.div`
  width: 22rem;
  height: 20rem;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #333;
  padding: 2rem;
  overflow-y: auto;
  flex: 1; 
`;

export const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ed7101;
  margin-top: 1rem;
`;
