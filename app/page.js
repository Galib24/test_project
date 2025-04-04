import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import FirstSection from "./components/Navbar/First Section/FirstSection";
import SecondSection from "./components/Second Section/SecondSection";
import ThirdSection from "./components/Third Section/ThirdSection";
import FourthSection from "./components/Fourth Section/FourthSection";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  );
}
