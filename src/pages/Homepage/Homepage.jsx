// Imported components
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Qualifications from "../../components/Qualifications/Qualifications";
import Works from "../../components/Works/Works";
import HomeTeam from "../../components/HomeTeam/HomeTeam";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/Projects/Projects";

// Imported CSS
import "./homepage.css";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Qualifications />
      <Works />
      <Skills />
      <Projects />
      <HomeTeam />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
