import React from "react";
import Navbar from "../../components/Components/Navbar";
import Hero from "../../components/Components/Hero";
import Info from "../../components/Components/Info";
import About from "../../components/Components/About";
import BookAppointment from "../../components/Components/BookAppointment";
import Reviews from "../../components/Components/Reviews";
import Doctors from "../../components/Components/Doctors";
import Footer from "../../components/Components/Footer";

function Home1() {
  return (
    <div className="home-section">
      
      <Hero />
      {/* <Info /> */}
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home1;
