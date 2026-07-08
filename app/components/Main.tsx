import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";


const Main = () => {
  return (
    <div id="home" className="relative z-0 w-full h-screen flex items-center justify-center shadow-[0_30px_50px_rgba(0,0,0,1)]">   {/* <- KONTEKST */}
      <Image
        className="absolute select-none  blur-sm inset-0 w-full h-full object-cover grayscale-100 brightness-50"
        alt="Background"
        src="/images/background.png"
        width={600}
        height={200}
        draggable={false}
        
      />
      {/* <div className="absolute inset-0 w-full h-full bg-black opacity-60 flex items-center justify-center" /> */}
      <div className="relative z-10 flex w-[90%] max-w-[800px] flex-col items-center justify-center gap-2 my-auto text-neutral-100">
        <Image className='w-full h-auto select-none shadow-black brightness-80' src="/images/logo-white1.png" alt="Domańscy Autoserwis" width={800} height={300} draggable={false} />
        <span className="block w-full bg-linear-to-br from-neutral-200 from-30% to-neutral-400/70 bg-clip-text text-center text-[clamp(2rem,5vw,3.75rem)] font-bold font-sans leading-none tracking-wide text-transparent">
          Domańscy Autoserwis
        </span>
        <span className="mb-6 w-full text-center font-sans text-[clamp(1rem,2vw,1.5rem)] text-neutral-300">
          Eksperci w dziedzinie mechaniki samochodowej
        </span>
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