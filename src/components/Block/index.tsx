import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";
import { ReactNode } from "react";

interface Props {
  title: string;
  content: string;
  t: TFunction;
  children?: ReactNode;
}

const Block = ({ title, content, t, children }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
      {children && <div>{children}</div>}
    </Container>
  );
};

export default withTranslation()(Block);
