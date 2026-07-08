import React from 'react'
import Service from './Service'
import { PiEngineBold } from "react-icons/pi";
import { Wrench, Gauge, Settings, Shield } from 'lucide-react'
const Services = () => {

  const services = [
    { title: "Naprawa", icon: Wrench },
    { title: "Chiptuning", icon:  Gauge },
    { title: "Wymiana części eksploatacyjnych", icon:  Settings },
    { title: "Zaimpregnowanie podwozia", icon:  Shield },

   

  ];
  return (
  
    <div id="usługi" className='relative flex flex-col items-center justify-center w-full min-h-[500px] my-24'>
        <h2 className='text-5xl font-bold mb-16 text-neutral-200 font-sans tracking-wide '>Nasze Usługi</h2>
        <div className='flex w-full flex-wrap px-8 flex-row md:flex-row items-center justify-center gap-8'>
            {services.map((service, index) => (
                <Service key={index} title={service.title} icon={service.icon} />
            ))}
        </div>
    </div>
  )
}

export default Services