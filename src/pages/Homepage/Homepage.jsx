// Imported components
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Testimony from "../../components/Testimony/Testimony";
import Works from "../../components/Works/Works";
import HomeTeam from "../../components/HomeTeam/HomeTeam";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/Projects/Projects";
import Info from "../../components/Info/Info";

// Imported CSS
import "./homepage.css";
import RotateText from "../../components/RotateText/RotateText";
import Reveal from "../../components/Reveal/Reveal";
import Gallery from "../../components/Gallery/Gallery";
import ImageCards from "../../components/ImageCards/ImageCards";
import Why from "../../components/Why/Why";
import ScrollText from "../../components/ScrollText/ScrollText";
import Hero1 from "../../components/Hero1/Hero1";

function Homepage() {
  return (
    <>
      <Header />
      <Hero1 />
      <RotateText />
      <Hero />
      {/* <AboutMe /> */}
      <Reveal />
      <Testimony />
      {/* <Works /> */}
      <Why />
      <Skills />
      {/* <Info /> */}
      {/* <Projects /> */}
      <HomeTeam />
      <Contact />
      <Gallery />
      <ImageCards />
      {/* <ScrollText /> */}
      <Footer />
    </>
  );
}

export default Homepage;
