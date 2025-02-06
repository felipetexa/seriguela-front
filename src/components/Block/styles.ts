import styled from "styled-components";

export const Container = styled.div`
   display: flex;
  flex-direction: row; /* Arrange children in a row */
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem; /* Space between main content and side content */
  padding: 2rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    flex-direction: column; /* Stack content on smaller screens */
  }
`;

export const TextWrapper = styled.div`
  flex: 2; /* Make the text content take more space compared to SideContent */
  max-width: 60%; /* Adjust the width as needed */
  @media only screen and (max-width: 768px) {
    max-width: 100%; /* Expand to full width on smaller screens */
  }
`;

export const Content = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
`;
