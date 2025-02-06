import { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [background, setBackground] = useState("transparent");  
  const [fontColor, setFontColor] = useState("#fff");  
  const [isHeaderVisible, setHeaderVisible] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 80) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false); // Hide header when scrolled less than 5rem
    }
    if (scrollY >= window.innerHeight) {
      setBackground("#fff"); // Background changes to white after scrolling 10rem
      setFontColor("black")
    } else {
      setBackground("transparent"); // Background remains transparent at the top
      setFontColor("#fff"); // Background remains transparent at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall style={{ color: fontColor }} onClick={() => scrollTo("about")}>
          <Span>{t("Quem somos")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ color: fontColor }} onClick={() => scrollTo("mission")}>
          <Span>{t("Missão")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ color: fontColor }} onClick={() => scrollTo("product")}>
          <Span>{t("Portfólio")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button
            color="#ed7101"
            >{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection style={{ backgroundColor: background, display: isHeaderVisible ? "block" : "none" }}>
      <Container backgroundColor="transparent">
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img src="/img/icons/logoseriguela.png" height="40px" alt="logo"/>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
