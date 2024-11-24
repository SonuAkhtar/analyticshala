// Imported components
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
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
import Courses from "../../components/Courses/Courses";
import Courses1 from "../../components/Courses1/Courses1";
import Questions from "../../components/Questions/Questions";
import ScrollCards from "../../components/ScrollCards/ScrollCards";

function Homepage() {
  return (
    <>
      <Hero />
      <Courses1 />
      <ScrollCards />
      <Skills />
      <Testimony />
      <HomeTeam />
      <Questions />
      <Contact />
      {/* <Reveal /> */}
      {/* <ScrollText /> */}
      {/* <Hero1 /> */}
      {/* <RotateText /> */}
      {/* <Courses /> */}
      {/* <Works /> */}
      {/* <Why /> */}
      {/* <Info /> */}
      {/* <Projects /> */}
      {/* <Gallery /> */}
      {/* <ImageCards /> */}
    </>
  );
}

export default Homepage;
