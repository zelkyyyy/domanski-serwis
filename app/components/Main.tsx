import React from 'react'
import { Montserrat } from "next/font/google";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // jakie chcesz
  variable: "--font-montserrat", // opcjonalnie jeśli chcesz jako CSS variable
});


const Main = () => {
  return (
    <div className="relative z-0 w-full h-screen flex items-center justify-center shadow-[0_30px_50px_rgba(0,0,0,1)]">   {/* <- KONTEKST */}
      <Image
        className="absolute select-none  blur-sm inset-0 w-full h-full object-cover grayscale-100 brightness-50"
        alt="Background"
        src="/images/background.png"
        width={600}
        height={200}
        draggable={false}
        
      />
      {/* <div className="absolute inset-0 w-full h-full bg-black opacity-60 flex items-center justify-center" /> */}
      <div className="relative z-10 text-neutral-100 flex flex-col justify-center items-center gap-2 my-auto">
        <Image className='w-[90%] max-w-[800px] h-auto select-none shadow-black brightness-80' src="/images/logo-white1.png" alt="Domańscy Autoserwis" width={800} height={300} draggable={false} />
        <span className={`block bg-gradient-to-br from-neutral-200 from-30% to-neutral-400/70 text-transparent bg-clip-text text-4xl md:text-5xl font-bold font-sans tracking-wide`}>Domańscy Autoserwis</span>
        <span className={`text-lg md:text-2xl text-neutral-300 font-sans mb-6`}>Eksperci w dziedzinie mechaniki samochodowej</span>
        <div className='flex gap-4 md:gap-12 flex-row flex-wrap items-center justify-center px-4'>
            <a href="tel:" className={`text-xl text-white font-bold font-sans px-6 py-4 rounded-lg bg-red-600 hover:shadow-[0_0_40px_var(--color-red-600)] shadow-red-500/60 duration-300 flex items-center gap-2 `}><BsFillTelephoneFill />Robert</a>
            <a href="tel:" className={`text-xl text-white font-bold font-sans px-6 py-4 rounded-lg bg-red-600 hover:shadow-[0_0_40px_var(--color-red-600)] shadow-red-500/60 duration-300 flex items-center gap-2 `}><BsFillTelephoneFill />Mieczysław</a>
            <a href="tel:" className={`text-xl text-white font-bold font-sans px-6 py-4 rounded-lg bg-red-600 hover:shadow-[0_0_40px_var(--color-red-600)] shadow-red-500/60 duration-300 flex items-center gap-2 `}><BsFillTelephoneFill />Rafał</a>
        </div>
        <span className={`text-xl text-neutral-300 font-sans  flex items-center gap-2 mt-10`}><FaLocationDot className='text-red-500' />&nbsp;21-400 Łuków, ul. Radzyńska 4</span>
      </div>
    </div>
  )
}

export default Main