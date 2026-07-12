"use client"

import { useEffect, useState } from 'react'
import { IoAdd } from "react-icons/io5";

type ServiceItem = {
  name: string
  description: string
}

const Services = () => {
  const [services, setServices] = useState<ServiceItem[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const loadServices = async () => {
      const response = await fetch('/data/services.json')
      const data = (await response.json()) as ServiceItem[]

      setServices(data)
    }

    loadServices().catch((error) => {
      console.error('Failed to load services data', error)
    })
  }, [])

  return (
    <div id="usługi" className="relative flex w-full flex-col items-center justify-center my-24 min-h-[500px]">
      <h2 className="mb-16 text-5xl font-bold tracking-wide text-neutral-200 font-sans">Nasze Usługi</h2>

      <div className="flex w-full max-w-4xl flex-col gap-4 px-4 md:px-8">
        {services.map((service, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={`${service.name}-${index}`}
              className="overflow-hidden rounded-2xl border border-neutral-200/10 bg-neutral-950/60 shadow-lg shadow-black/30"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5"
                aria-expanded={isOpen}
                aria-controls={`service-panel-${index}`}
              >
                <span className="text-lg font-semibold text-neutral-100 md:text-xl">{service.name}</span>
                <IoAdd className={`h-5 w-5 text-red-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} />
              </button>

              <div
                id={`service-panel-${index}`}
                className={`overflow-hidden  transition-[max-height,padding] duration-300  ${isOpen ? 'max-h-40 p-5 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
              >
                <p className="max-w-3xl text-sm leading-7 text-neutral-300 md:text-base">{service.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services