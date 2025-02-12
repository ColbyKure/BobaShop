import React from "react";
import HeroSection from "../components/HeroSection";
import TopMenuItems from "../components/TopMenuItems";
import OrderSection from "../components/OrderSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TopMenuItems />
      <OrderSection /> {/* ✅ New Ordering Section Added */}
      <Footer />
    </div>
  );
};

export default Home;
