import { lazy } from "react";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import CarouselContentJson from "../../content/CarouselContent.json";
import testimonialsContent from "../../content/TestimonialsContent.json";

import { CustomCarouselProps } from "../../components/Carousel/types";
import TestimonialsSection from "../../components/TestimonialsSection";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const CarouselComponent = lazy(() => import("../../components/Carousel"));
const PillarSection = lazy(() => import("../../components/PillarSection"));

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
          <p style={{ fontSize: "65px", color: "#fff", marginLeft: "70px", marginTop: "150px", lineHeight: "1", fontWeight: 300, fontFamily: 'Open Sauce One', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)", wordSpacing: "2px"  }}>
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
            <h4 style={{ fontSize: "30px", fontFamily: 'Open Sauce One', color: "#fff", marginLeft: "70px", marginBottom: "50px" }}>
            <span style={{ color: "#ed7101" }}>Seu lar</span>, seu lugar preferido,<br />
            <span style={{ color: "#ed7101" }}>está aqui.</span>
            </h4>
          </div>
        </div>
      </ContentBlock>
      <CarouselComponent items={CarouselContentJson.items as CustomCarouselProps['items']} />
      <PillarSection />
      <TestimonialsSection testimonials={testimonialsContent.testimonials}/>
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
