import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/projects/Portfolio";

import { useRef } from "react";

const App = () => {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const services = useRef(null);
  const qualification = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        home={home}
        about={about}
        skills={skills}
        services={services}
        qualification={qualification}
        portfolio={portfolio}
        contact={contact}
      />
      <main className="main">
        <section ref={home}>
          <Home />
        </section>

        <section ref={about}>
          <About />
        </section>
        <section ref={skills}>
          <Skills />
        </section>
        <section ref={services}>
          <Services />
        </section>
        <section ref={qualification}>
          <Qualification />
        </section>
        <section ref={portfolio}>
          <Portfolio />
        </section>
        {/* <Testimonials /> */}
        <section ref={contact}>
          <Contact />
        </section>
      </main>
      <Footer
        scrollToSection={scrollToSection}
        home={home}
        about={about}
        skills={skills}
        services={services}
        qualification={qualification}
        portfolio={portfolio}
        contact={contact}
      />
      <ScrollUp scrollToSection={scrollToSection} home={home} />
    </>
  );
};

export default App;
