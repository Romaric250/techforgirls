import React from "react";
import Header from "./Components/Header/Header";
import MiddelSection from "./Components/MiddleSection/MiddelSection";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MiddelSection />
      <Footer />
    </div>
  );
};

export default App;
