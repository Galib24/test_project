import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import FirstSection from "./components/Navbar/First Section/FirstSection";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <FirstSection />
    </>
  );
}
