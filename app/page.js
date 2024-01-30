import Image from "next/image";
import LandingPage from "./components/landing";
import Options from "./components/Options";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Options/>
    </>
  );
}
