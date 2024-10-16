import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, backgroundColor, children }: ContainerProps) => (
  <StyledContainer border={border} backgroundColor={backgroundColor}>{children}</StyledContainer>
);

export default Container;
