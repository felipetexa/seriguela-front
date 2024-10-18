import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        bgImage="/img/bannerfundo.png"
        id="intro"
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <div style={{ position: "absolute", top: "20px", left: "20px" }}>
          <p style={{ fontSize: "56px", color: "#fff", marginLeft: "70px", marginTop: "120px", lineHeight: "1", fontWeight: 400, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)", letterSpacing: "-0.5px", wordSpacing: "2px"  }}>
            <span style={{ color: "#ed7101" }}>Casas acessíveis</span> em<br />
            <span>locais excepcionais.</span>
            </p>
          </div>

          {/* Logo on Upper Right */}
          <div style={{ position: "absolute", bottom: "50px", right: "100px" }}>
            <img src="/img/icons/logoseriguela.png" alt="Logo" width="380" />
          </div>

          {/* Large Text on Left */}
          <div style={{ position: "absolute", top: "-38px", left: "20px", transform: "translateY(-50%)" }}>
            <h4 style={{ fontSize: "30px", color: "#fff", marginLeft: "70px", marginBottom: "50px" }}>
            <span style={{ color: "#ed7101" }}>Seu lar</span>, seu lugar preferido,<br />
            <span style={{ color: "#ed7101" }}>está aqui.</span>
            </h4>
          </div>
        </div>
      </ContentBlock>
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
