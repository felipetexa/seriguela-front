import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
  backgroundColor?: string;
}>`
  position: relative;
  width: 100%;
  max-width: 1350px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
  background-color: ${(p) => p.backgroundColor || "transparent"};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    }
`;
