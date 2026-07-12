import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";


const Hero = () => {
  return (
    <div id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,1)]">
      <Image
        className="absolute h-full w-full inset-0  select-none object-cover blur-sm grayscale-100 brightness-50"
        alt="Background"
        src="/images/background.png"
        width={600}
        height={200}
        draggable={false}
      />

      <div className="relative z-10 flex w-[90%] max-w-[800px] flex-col items-center justify-center gap-2 px-4 py-12 text-neutral-100">
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
        <a href="https://maps.app.goo.gl/BZLzjFTBMpkseLKw8" target="_blank" rel="noopener noreferrer" className={`text-xl text-neutral-300 font-sans  flex items-center gap-2 mt-10`}>
          <FaLocationDot className='text-red-500' />&nbsp;21-400 Łuków, ul. Radzyńska 4
        </a>
      </div>
    </div>
  )
}

export default Hero