import styled from "styled-components";

const HEADER_HEIGHT = 20;

export const CarouselSection = styled.section`
  width: 100%;
  padding: 4rem 0;
  background-color: #ed7101;
  width: 100vw;
  height: calc(100vh + ${HEADER_HEIGHT}px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
`;

export const CarouselItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: left; /* Align text to the left in the card */
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column; /* Stack items on smaller screens */
    height: auto;
    padding: 1rem;
  }
`;

export const CarouselImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px; /* Apply border-radius here for consistency */

  height: 70vh;
  max-height: 500px;

  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;

export const CarouselImage = styled.img`
  width: auto;
  height: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
    max-height: 40vh;
  }
`;

export const DescriptionCard = styled.div`
  width: 50%;
  font-size: 0.9rem;
  font-style: italic;
  text-align: justify;
  font-weight: 300;
  color: #333;
  background-color: #ed7101;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 2rem;
  margin-left: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  

  @media only screen and (max-width: 768px) {
    width: 90%;
    margin-left: 0;
    text-align: center;
    margin-top: 1.5rem;
    p {
      font-size: 0.8rem;
    }
  }
`;
