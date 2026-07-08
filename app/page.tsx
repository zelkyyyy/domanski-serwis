import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-950 overflow-x-hidden">
      {/* <video autoPlay muted loop playsInline className="w-full object-cover opacity-80">
        <source src="/images/video.mp4" type="video/mp4" />
    </video> */}
      <Main />
      <Services />  
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <About />
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <Gallery />
      <div className="w-full h-[1px] bg-neutral-700"></div>

      <Footer />
    </div>
  );
}
