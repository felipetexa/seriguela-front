import styled from "styled-components";

export const PillarWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  gap: 5rem;
  padding: 4rem;
`

export const SideContent = styled.div`
  flex: 1; /* Allow it to take available space */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem; /* Space between individual items in SideContent */
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    max-width: 100%; /* Use full width on smaller screens */
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const IconTitle = styled.h6`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Content = styled.p`
  font-size: 1rem;
  max-width: 100%;
  line-height: 1.5;
  color: black;
  text-align: justify; 
`;
