import React from "react";
import Navbar from "../components/Navbar";
import MintSection from "../components/Mint";
import TimeLine from "../components/TimeLine";
import Footer from "../components/Footer";
import { reveal } from "../utils/reveal";

const Page = () => {
  window.addEventListener("scroll", reveal);
  return (
    <div>
      <Navbar />
      <MintSection />
      <TimeLine />
      <Footer />
    </div>
  );
};

export default Page;
