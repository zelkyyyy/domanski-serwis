"use client"

import { useEffect, useState } from 'react'
import { IoAdd } from "react-icons/io5";

interface Service {
  name: string
  description: string
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const loadServices = async () => {
      const response = await fetch('/api/services')
      const data: Service[] = (await response.json())

      setServices(data)
    }

    loadServices().catch((error) => {
      console.error('Failed to load services data', error)
    })
  }, [])

  const filteredServices = services.filter((service: Service) => {
    const searchTerm = query.trim().toLowerCase()

    if (!searchTerm) {
      return true
    }

    return (
      service.name.toLowerCase().includes(searchTerm) ||
      service.description.toLowerCase().includes(searchTerm)
    )
  })

  return (
    <div id="usługi" className="relative flex w-full flex-col items-center justify-center my-24 min-h-[500px]">

      <h2 className="mb-16 text-5xl font-bold tracking-wide text-neutral-200 font-sans">Nasze Usługi</h2>

      <div className="mb-8 w-full max-w-4xl px-4 md:px-8">
        <input
          id="services-search"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpenIndex(null)
          }}
          placeholder="Wyszukaj usługę..."
          className="w-full rounded-2xl border border-neutral-200/10 bg-neutral-950/80 px-5 py-4 text-neutral-100 outline-none transition placeholder:text-neutral-500 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20"
        />
      </div>

      <div className="flex w-full max-w-4xl flex-col gap-4 px-4 md:px-8">
        {filteredServices.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200/10 bg-neutral-950/60 px-5 py-6 text-neutral-300 shadow-lg shadow-black/30">
            Nie znaleziono usług pasujących do wyszukiwania.
          </div>
        ) : null}

        {filteredServices.map((service, index) => {
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