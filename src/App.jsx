import React from "react";
import Header from "./assets/components/Header";
import Home from "./assets/components/Home";
import Sponsors from "./assets/components/Sponsors";
import Title from "./assets/components/Title";
import Services from "./assets/components/Services";
import Happen from "./assets/components/Happen";
import Casestudies from "./assets/components/Casestudies";
import Working from "./assets/components/Working";
import Team from "./assets/components/Team";
import Contactus from "./assets/components/Contactus";
import Footeer from "./assets/components/Footeer";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Sponsors />
      <Title
        title="Services"
        parag={
          <>
            At our digital marketing agency, we offer a range of services to
            help businesses
            <br />
            grow and succeed online. These services include:
          </>
        }
      />
      <Services />
      <Happen />
      <Title
        title="Case Studies"
        parag={
          <>
            Explore Real-Life Examples of Our Proven Digital Marketing
            <br />
            Success through Our Case Studies
          </>
        }
      />
      <Casestudies />
      <Title
        title="Our Working Process "
        parag={
          <>
            Step-by-Step Guide to Achieving
            <br />
            Your Business Goals
          </>
        }
      />
      <Working />
      <Title
        title="Team "
        parag={
          <>
            Meet the skilled and experienced team behind our
            <br />
            successful digital marketing strategies
          </>
        }
      />
      <Team />
      <Title
        title="Contact Us "
        parag={
          <>
            Connect with Us: Let's Discuss Your
            <br />
            Digital Marketing Needs
          </>
        }
      />
      <Contactus />
      <Footeer />
    </div>
  );
}

export default App;
